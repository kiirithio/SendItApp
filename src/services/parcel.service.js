import axios from 'axios'

const API_URL = "http://localhost:5000/parcels/"
const createParcel = (description, sender_number, receiver_number, start_location, end_location, senderId, receiver_name, weight) => {
    return axios.post(API_URL +"createparcel",{
        description, 
        sender_number, 
        receiver_number, 
        start_location, 
        end_location,
        senderId,
        receiver_name,
        weight
    })
}
const getUserParcel = (senderId) => {
    return axios.get(API_URL +"userparcel",{
        senderId
    })
}

export default {
    createParcel,
    getUserParcel
}

