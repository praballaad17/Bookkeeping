import axios from 'axios';
import Url from "../config.json";

// const apiEndpointInvoice = Url?.apiUrl + "/invoice";
const apiEndpointInvoice = Url?.localUrl + "/invoice";
const apiEndpointItem = Url?.localUrl + "/invoice";


export const createInvoice = async (itemlist, userId, type, total) => {
  try {

    const request = { data: { itemlist, userId, type, total } };
    const response = await axios(`${apiEndpointInvoice}/addInvoice`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      ...request,
    });
    return response.data;

  } catch (err) {
    throw new Error(err.response.data.error);
  }
};

export const getPurchaseInvoiceUserId = async (userId) => {
  try {

    const response = await axios(`${apiEndpointInvoice}/getPurchaseInvoice/${userId}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    return response.data;

  } catch (err) {
    throw new Error(err.response.data.error);
  }
}