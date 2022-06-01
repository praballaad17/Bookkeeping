import axios from 'axios';
import Url from "../config.json";

const apiEndpointInvoice = Url?.apiUrl + "/invoice";
const apiEndpointItem = Url?.apiUrl + "/item";


export const createInvoice = async (invoiceID, itemlist) => {
  // var arr = [];
  try {
    if (itemlist) {
      itemlist.map(async (individualItem) => {
        if (individualItem.item !== "") {
          // const getitemObjectID = await axios(
          //   `${apiEndpointItem}/getItem/${individualItem.item}`,
          //   {
          //     method: "GET",
          //   }
          // );
          // const itemObjectID = getitemObjectID.data._id;
          // arr.push([itemObjectID, individualItem.quantity]);
          // console.log(arr);

        }
      });
      const itemIds = JSON.stringify(itemlist);
      const request = { data: { invoiceID, itemIds } };
      const response = await axios(`${apiEndpointInvoice}/addInvoice`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        ...request,
      });
      return response.data;
    }
  } catch (err) {
    throw new Error(err.response.data.error);
  }
};