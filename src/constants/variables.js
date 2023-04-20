export const INVOICETYPE = {
  PURCHASE: "purchase",
  SALES: "sales",
};

export const NAVITEM = {
  HOME: "dashboard",
  PARTY: "parties",
  ITEM: "item",
  SALES: "sales",
  PURCHASE: "purchase",
  GSTDASH: "gst",
  SETTING: "setting",
  EXPENSES: "expenses",
  CASHBANK: "cashbank",
  IMPORTITEM: "import-item",
};
export const GSTRATES = [0, 0.1, 0.25, 1.5, 3, 5, 6, 12, 13.8, 14, 18, 28];

export const EMPTYITEM = {
  name: "",
  itemCategory: "",
  itemCode: "",
  discount: "",
  unit: 0,
  salePrice: 0,
  purchasePrice: 0,
  itemWiseTax: 0,
  amount: 0,
};

export const GSTTABLE = [
  "#",
  "GSTIN",
  "Particulars",
  "Invoice No.",
  "Invoive Date",
  "Rate",
  "Taxable",
  "CGST",
  "SGST",
  "IGST",
  "Invoice Value",
];

export const RATETABLE = ["Rate", "Taxable", "CGST", "SGST", "IGST", "Total"];

export const EMPTYINVOICE = {
  partyId: "",
  type: "",
  total: 0,
  invoiceNumber: 0,
  date: "",
};

export const FINANCIALYEAR = ["2020-21", "2021-22", "2022-23", "2023-24"];

export const QUATERS = [
  { data: "Quarter-1 (Apr - Jun)", code: 1 },
  { data: "Quarter-2 (Jul - Sep)", code: 2 },
  { data: "Quarter-3 (Oct - Dec)", code: 3 },
  { data: "Quarter-4 (Jan - Mar)", code: 4 },
];

export const MONTHS = [
  { data: "January", code: "Jan" },
  { data: "February", code: "Feb" },
  { data: "March", code: "Mar" },
  { data: "April", code: "Apr" },
  { data: "May", code: "May" },
  { data: "June", code: "Jun" },
  { data: "July", code: "Jul" },
  { data: "August", code: "Aug" },
  { data: "September", code: "Sep" },
  { data: "October", code: "Oct" },
  { data: "November", code: "Nov" },
  { data: "December", code: "Dec" },
];

export const REPORTTYPE = {
  GSTR1: "GSTR1",
  GSTR3B: "GSTR3B",
};
