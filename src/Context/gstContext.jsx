import React, { useContext, useState, useEffect, createContext } from "react";
import {
  getSalesInvoice,
  getPurchaseInvoice,
  getFillingDetails,
  getGSTR1FillingDetails,
  getGSTR3BFillingDetails,
} from "../services/gstServices";
import { useUser } from "./userContext";
import { REPORTTYPE } from "../constants/variables";

const GSTContext = createContext();

export function useGST() {
  return useContext(GSTContext);
}
export function GSTProvider({ user, children }) {
  const { addToast, setLoading } = useUser();
  const [fillingReport, setFillingReport] = useState({});
  const [gstr3bInvoice, setGstr3bInvoice] = useState([]);
  const [gstr1Invoice, setGstr1Invoice] = useState([]);
  const [b2bInvoice, setb2bInvoice] = useState([]);
  const [b2cInvoice, setb2cInvoice] = useState([]);
  const [rateTable, setRateTable] = useState([]);
  const [date, setDate] = useState({});

  useEffect(() => {
    const rtn_year = localStorage.getItem("rtn_year");
    const rtn_month = localStorage.getItem("rtn_month");
    const rtn_quarter = localStorage.getItem("rtn_quarter");
    const repObj = localStorage.getItem("repObj");
    const newDate = {
      rtn_year,
      rtn_quarter,
      rtn_month,
    };
    if (rtn_year && rtn_month && rtn_quarter) {
      setFillingReport({
        repObj: JSON.parse(repObj),
      });
      generateDate(rtn_year, rtn_month, rtn_quarter, newDate);
    }
  }, []);

  const getFillingDetailsContext = async (userId, monthFinancialYear) => {
    try {
      const res = await getFillingDetails(userId, monthFinancialYear);
      let report = {};
      let repObj = {};

      res.map((item) => {
        report[item.reportType] = item;
        repObj[item.reportType] = item.isFilled;
        // console.log(item.invoices);
        let invoices = [...item.invoices];
        processItemDataToFormate(invoices, setGstr1Invoice);
      });

      localStorage.setItem("repObj", JSON.stringify(repObj));
      setFillingReport(report);
    } catch (error) {
      clearAllData();
      console.log(error);
    }
  };

  const clearAllData = () => {
    setFillingReport({});
    setGstr3bInvoice([]);
    setGstr1Invoice([]);
    setb2bInvoice([]);
    setb2cInvoice([]);
  };

  const getGSTR1FillingDetailsContext = async (
    userId,
    monthFinancialYear,
    start,
    end
  ) => {
    try {
      setLoading(true);
      const data = await getGSTR1FillingDetails(
        userId,
        monthFinancialYear,
        start,
        end
      );

      if (data.isFound) {
        setFillingReport({
          [REPORTTYPE.GSTR1]: data.fileReport,
        });

        processItemDataToFormate(data.fileReport.invoices, setGstr1Invoice);
        setLoading(false);
      } else {
        processItemDataToFormate(data.invoices, setGstr1Invoice);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const getGSTR3BFillingDetailsContext = async (
    userId,
    monthFinancialYear,
    start,
    end
  ) => {
    try {
      setLoading(true);
      const data = await getGSTR3BFillingDetails(
        userId,
        monthFinancialYear,
        start,
        end
      );

      if (data.isFound) {
        setFillingReport({
          [REPORTTYPE.GSTR3B]: data.fileReport,
        });
        processItemDataToFormate(data.fileReport.invoices, setGstr3bInvoice);
        setLoading(false);
      } else {
        processItemDataToFormate(data.invoices, setGstr3bInvoice);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const getGSTR1Invoice = async (setdate = { ...date }) => {
    try {
      const data = await getSalesInvoice(user.id, setdate.start, setdate.end);
      processItemDataToFormate(data, setGstr1Invoice);
      return data;
    } catch (error) {
      addToast(`error: ${error?.message}`, true);
      console.log(error);
    }
  };

  const getGSTR3BInvoice = async () => {
    try {
      const data = await getPurchaseInvoice(user.id);
      processItemDataToFormate(data, setGstr3bInvoice);
      return data;
    } catch (error) {
      addToast(`error: ${error?.message}`, true);
      console.log(error);
    }
  };

  const processItemDataToFormate = (paraminvoices, setFunction) => {
    let formatedInvoices = [];
    let invoices = [...paraminvoices];
    invoices.map((invoice) => {
      let tempItemIds = invoice.itemIds;

      tempItemIds.sort((a, b) =>
        a.itemId.itemWiseTax > b.itemId.itemWiseTax
          ? -1
          : b.itemId.itemWiseTax > a.itemId.itemWiseTax
          ? 1
          : 0
      );

      delete invoice.itemIds;
      tempItemIds.map((item) => {
        formatedInvoices.push({
          ...invoice,
          unit: item.unit,
          rate: item.itemId.itemWiseTax,
          salePrice: item.itemId.salePrice,
          purchasePrice: item.itemId.purchasePrice,
        });
      });
    });

    setFunction(formatedInvoices);
    sepreateInvoice(formatedInvoices);
  };

  const getTaxRateTable = (newInvoice = [...gstr1Invoice]) => {
    let rateTable = [];

    newInvoice.sort((a, b) =>
      parseInt(a.rate) > parseInt(b.rate)
        ? 1
        : parseInt(b.rate) > parseInt(a.rate)
        ? -1
        : 0
    );
    let prev = newInvoice[0];
    let sum = newInvoice[0].salePrice * newInvoice[0].unit;
    for (let i = 1; i < newInvoice.length; i++) {
      if (prev.rate == newInvoice[i].rate) {
        sum += newInvoice[i].salePrice * newInvoice[i].unit;
      } else {
        rateTable.push({
          rate: prev.rate,
          taxable: sum,
        });
        sum = newInvoice[i].salePrice * newInvoice[i].unit;
        prev = newInvoice[i];
      }
    }
    rateTable.push({
      rate: prev.rate,
      taxable: sum,
    });
    setRateTable(rateTable);
  };

  const sepreateInvoice = (invoices = gstr1Invoice) => {
    let b2b = [];
    let b2c = [];

    invoices.map((item) => {
      if (item.party.gstType === "registered") {
        b2b.push(item);
      } else {
        b2c.push(item);
      }
    });

    setb2bInvoice(b2b);
    setb2cInvoice(b2c);

    return { b2b, b2c };
  };

  function generateDate(financialYear, month, quarter, newDate) {
    let year = financialYear.split("-")[0];
    let secondYear = "20" + financialYear.split("-")[1];
    let monthCode = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    let monthIndex = monthCode.indexOf(month) + 1;
    let nextmonthIndex = monthCode.indexOf(month) + 2;
    if (monthIndex < 9) {
      monthIndex = "0" + monthIndex;
    }
    if (nextmonthIndex < 9) {
      nextmonthIndex = "0" + nextmonthIndex;
    }
    if (quarter == 4) {
      year = secondYear;
    }
    const resultant = {
      start: year + "-" + monthIndex + "-" + "01",
      end: year + "-" + nextmonthIndex + "-" + "01",
    };
    const monthFinancialYear = monthIndex + financialYear;
    setDate({ ...newDate, ...resultant, monthFinancialYear });
    return { ...resultant, ...newDate, monthFinancialYear };
  }

  const value = {
    gstr3bInvoice,
    gstr1Invoice,
    b2bInvoice,
    b2cInvoice,
    rateTable,
    date,
    fillingReport,
    getGSTR3BInvoice,
    sepreateInvoice,
    getTaxRateTable,
    getGSTR1Invoice,
    generateDate,
    getFillingDetailsContext,
    getGSTR1FillingDetailsContext,
    getGSTR3BFillingDetailsContext,
  };

  return <GSTContext.Provider value={value}>{children}</GSTContext.Provider>;
}
