import {
    PARCEL_CREATE_SUCCESS,
    PARCEL_CREATE_FAIL,
    PARCEL_GET_FAIL,
    PARCEL_GET_SUCCESS,
    SET_MESSAGE
} from "./types";
import parcelService from "../../services/parcel.service";

export const createParcel = (description,sender_number,receiver_number,start_location,end_location,senderId,receiver_name,weight) => (dispatch) => {
  return parcelService.createParcel(description,sender_number,receiver_number,start_location,end_location,senderId,receiver_name,weight).then(
    (response) => {
        dispatch({
            type: PARCEL_CREATE_SUCCESS,
        })
        dispatch({
            type: SET_MESSAGE,
            payload: response.data.message,
        })
        return Promise.resolve()
    },
    (error) => {
        const message = 
            (error.response &&
            error.response.data &&
            error.response.data.message) ||
            error.message ||
            error.toString()
        dispatch({
            type: PARCEL_CREATE_FAIL,
        });
        dispatch({
            type: SET_MESSAGE,
            payload: message,
        })
        return Promise.reject()
    }
  )
}

export const getUserParcel = (senderId) => (dispatch) => {
    return parcelService.getUserParcel(senderId).then(
      (data) => {
          dispatch({
              type: PARCEL_GET_SUCCESS,
                payload: { parcel: data },
          });
          return Promise.resolve();
      },
      (error) => {
          const message = 
              (error.response &&
              error.response.data &&
              error.response.data.message) ||
              error.message ||
              error.toString()
          dispatch({
              type: PARCEL_GET_FAIL,
          });
          dispatch({
              type: SET_MESSAGE,
              payload: message,
          })
          return Promise.reject()
      }
    )
}

