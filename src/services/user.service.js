import axios from "axios";
import authHeader from "./auth.header";

const API_URL = "http://localhost:5000/"
const getUserBoard = () => {
    return axios.get(API_URL + "dashboard", { headers: authHeader() })
};

export default {
    getUserBoard
}