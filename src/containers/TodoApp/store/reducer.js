import {
  CHANGE_VALUE,
  FETCH_SUCCESS,
  FETCH_REQUEST,
  FETCH_ERROR,
  INIT_RECORDS,
} from "./actionTypes";

const initialState = {
  records: [],
  value: "2",
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_VALUE:
      return { ...state, value: action.value };
    case FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case INIT_RECORDS:
      return {
        ...state,
        records: action.records,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return { ...state };
  }
};

export default reducer;
