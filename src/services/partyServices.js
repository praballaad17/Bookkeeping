import axios from 'axios';
import Url from "../config.json";

// const apiEndpoint = Url?.apiUrl + "/party";
const apiEndpoint = Url?.localUrl + "/party";

export const createParty = async (party, userId) => {
    try {
        const response = await axios.post(`${apiEndpoint}/addParty`, {
            party,
            userId
        });
        return response.data;
    } catch (error) {
        return error
    }

}


export const getPartyByUserId = async (userId) => {
    try {
        const response = await axios.get(`${apiEndpoint}/getPartyByUserId/${userId}`);
        return response.data;
    } catch (error) {
        return error
    }

}