import axios from 'axios';
import Url from "../config.json";

const apiEndpointInvoice = Url?.apiUrl + "/invoice";
// const apiEndpointInvoice = Url?.localUrl + "/invoice";
const apiEndpointItem = Url?.localUrl + "/invoice";


export const createInvoice = async (invoice, itemlist, userId) => {
  try {
    const request = { data: { ...invoice, itemlist, userId } };
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

export const getInvoiceUserId = async (type, userId) => {
  try {

    const response = await axios(`${apiEndpointInvoice}/invoiceId/${userId}/type/${type}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    return response.data;

  } catch (err) {
    throw new Error(err.response.data.error);
  }
}

export const deleteInvoice = async (id) => {
  try {

    const response = await axios(`${apiEndpointInvoice}/invoice/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    return response.data;

  } catch (err) {
    throw new Error(err.response.data.error);
  }
}