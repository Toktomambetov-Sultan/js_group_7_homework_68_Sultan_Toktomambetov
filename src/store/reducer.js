import {
  ADD,
  DECREMENT,
  FETCH_COUNTER_ERROR,
  FETCH_COUNTER_REQUEST,
  FETCH_COUNTER_SUCCESS,
  INCREMENT,
  SUBTRACT
} from "./actionTypes";

const initialState = {
  counter: 0,
  loading: false,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {...state, counter: state.counter + 1};
    case DECREMENT:
      return {...state, counter: state.counter - 1};
    case ADD:
      return {...state, counter: state.counter + action.value};
    case SUBTRACT:
      return {...state, counter: state.counter - action.value};
    case FETCH_COUNTER_REQUEST:
      return {...state, loading: true};
    case FETCH_COUNTER_SUCCESS:
      return {...state, loading: false, counter: action.value};
    case FETCH_COUNTER_ERROR:
      return {...state, loading: false, error: action.error};
    default:
      return state;
  }
};

export default reducer;