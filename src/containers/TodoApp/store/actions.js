import {
  CHANGE_VALUE,
  FETCH_ERROR,
  FETCH_SUCCESS,
  INIT_RECORDS,
  FETCH_REQUEST,
} from "./actionTypes";
import axiosApi from "../../../axiosApi";

export const changeValue = (value) => {
  return { type: CHANGE_VALUE, value };
};
const fetchRequest = () => {
  return { type: FETCH_REQUEST };
};
const fetchSuccess = () => {
  return { type: FETCH_SUCCESS };
};
export const initRecords = (records) => {
  return { type: INIT_RECORDS, records };
};
const fetchError = (error) => {
  return { type: FETCH_ERROR, error };
};
export const fetchInitRecords = () => {
  return async (dispatch) => {
    dispatch(fetchRequest());
    try {
      const response = await axiosApi.get("/records.json");
      dispatch(initRecords(response.data ? response.data : []));
      dispatch(fetchSuccess());
    } catch (e) {
      dispatch(fetchError(e));
    }
  };
};
export const fetchPut = (records) => {
  return async (dispatch) => {
    dispatch(fetchRequest());
    try {
      await axiosApi.put("/records.json", records);
      dispatch(fetchSuccess());
    } catch (e) {
      dispatch(fetchError(e));
    }
  };
};
