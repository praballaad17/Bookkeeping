import axios from 'axios';
import Url from "../config.json";

const apiEndpoint = Url?.localUrl + "/item";


export const importItemBulk = async (itemArray, userId) => {
    try {
        const response = await axios.post(`${apiEndpoint}/importitem`, {
            itemArray,
            userId
        });
        console.log(response.data);
        return response.data;
    } catch (err) {
        throw new Error(err.response.data.error);
    }
}

export const getItemsByUserId = async (userId, limit, pagenumber) => {
    try {
        const response = await axios.get(`${apiEndpoint}/items/userId/${userId}`, {
            params: { pagenumber, limit }
        });
        console.log(response.data);
        return response.data;
    } catch (err) {
        throw new Error(err.response.data.error);
    }
}