
import {
  ADD,
  DECREMENT,
  FETCH_COUNTER_ERROR,
  FETCH_COUNTER_REQUEST,
  FETCH_COUNTER_SUCCESS,
  INCREMENT,
  SUBTRACT
} from "./actionTypes";
import axiosApi from "../../../axiosApi";

export const incrementCounter = () => {
  return {type: INCREMENT};
};
export const decrementCounter = () => {
  return {type: DECREMENT};
};
export const addCounter = value => {
  return {type: ADD, value};
};
export const subtractCounter = value => {
  return {type: SUBTRACT, value};
};

const fetchCounterRequest = () => {
  return {type: FETCH_COUNTER_REQUEST};
};
const fetchCounterSuccess = value => {
  return {type: FETCH_COUNTER_SUCCESS, value};
};
const fetchCounterError = error => {
  return {type: FETCH_COUNTER_ERROR, error};
};

export const fetchCounter = () => {
  return async dispatch => {
    dispatch(fetchCounterRequest());
    try {
      const response = await axiosApi.get("/counter.json");
      dispatch(fetchCounterSuccess(response.data));
    } catch(e) {
      dispatch(fetchCounterError(e));
    }
  };
};