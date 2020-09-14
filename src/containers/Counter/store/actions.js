import {
  ADD,
  DECREMENT,
  FETCH_COUNTER_ERROR,
  FETCH_COUNTER_REQUEST,
  FETCH_COUNTER_SUCCESS,
  INCREMENT,
  SUBTRACT,
  FETCH_COUNTER_INIT,
} from "./actionTypes";
import axiosApi from "../../../axiosApi";

export const incrementCounter = () => {
  return { type: INCREMENT };
};
export const decrementCounter = () => {
  return { type: DECREMENT };
};
export const addCounter = (value) => {
  return { type: ADD, value };
};
export const subtractCounter = (value) => {
  return { type: SUBTRACT, value };
};

const fetchCounterRequest = () => {
  return { type: FETCH_COUNTER_REQUEST };
};
const fetchCounterInit = (value) => {
  return { type: FETCH_COUNTER_INIT, value };
};
const fetchCounterSuccess = () => {
  return { type: FETCH_COUNTER_SUCCESS };
};
const fetchCounterError = (error) => {
  return { type: FETCH_COUNTER_ERROR, error };
};

export const fetchCounter = () => {
  return async (dispatch) => {
    dispatch(fetchCounterRequest());
    try {
      const response = await axiosApi.get("/counter.json");
      dispatch(fetchCounterInit(response.data));
      dispatch(fetchCounterSuccess());
    } catch (e) {
      dispatch(fetchCounterError(e));
    }
  };
};

export const fetchCounterPut = (counter) => {
  return async (dispatch) => {
    dispatch(fetchCounterRequest());
    try {
      await axiosApi.put(".json", {counter});
      dispatch(fetchCounterSuccess());
    } catch (e) {
      dispatch(fetchCounterError(e));
    }
  };
};
