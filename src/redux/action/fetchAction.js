import axios from "axios";
import { FETCHING, FETCH_ERROR, FETCH_SUCCESS } from "./actionTypes";

export const fetching = () => {
  return {
    type: FETCHING,
  };
};
export const fetch_success = (data) => {
  return {
    type: FETCH_SUCCESS,
    payload: data,
  };
};
export const fetch_error = (error) => {
  return {
    type: FETCH_ERROR,
    payload: error,
  };
};

export const fetch_data = (query) => {
  return async function (dispatch) {
    try {
        console.log(query);
      dispatch(fetching());
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${query}`
      );
      dispatch(fetch_success(response.data))
    } catch (error) {
        dispatch(fetch_error(error.message))
    }
  };
};
