import axios from "axios";
import Url from "../config.json";

// const apiEndpointInvoice = Url?.apiUrl + "/gst";
const apiEndpointInvoice = Url?.localUrl + "/gst";

export const getB2BInvoice = async (userId) => {
  try {
    const response = await axios(`${apiEndpointInvoice}/b2b/${userId}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (err) {
    throw new Error(err.response.data.error);
  }
};
