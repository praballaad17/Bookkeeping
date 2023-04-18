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

export const EMPTYINVOICE = {
  partyId: "",
  type: "",
  total: 0,
  invoiceNumber: 0,
  date: "",
};
