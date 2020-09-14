import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  addCounter,
  decrementCounter,
  fetchCounter,
  incrementCounter,
  subtractCounter,
  fetchCounterPut,
} from "./store/actions";
import withStore from "../../hocs/withStore.js/withStore";
import reducer from "./store/reducer";

const Counter = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const incrementCounterHandler = () => dispatch(incrementCounter());
  const decrementCounterHandler = () => dispatch(decrementCounter());
  const addCounterHandler = (value) => dispatch(addCounter(value));
  const subtractCounterHandler = (value) => dispatch(subtractCounter(value));
  const interval = useRef(null);
  const loading = useRef(state.loading);
  const counter = useRef(state.counter);
  useEffect(() => {
    dispatch(fetchCounter());
    console.log("mount.");
  }, [dispatch]);
  useEffect(() => {
    loading.current = state.loading;
    if (counter.current === state.counter) {
      if (!loading.current) {
        loading.current = true;
      }
    }
    console.log(
      "[current]: ",
      counter.current,
      counter.current === state.counter,
    );
    counter.current = state.counter;
  }, [state.loading, state.counter]);
  useEffect(() => {}, []);
  useEffect(() => {
    const init = (message) => {
      console.log(message);
      if (loading.current) return;
      dispatch(fetchCounterPut(counter.current));
      console.log(counter.current);
    };
    interval.current = setInterval(() => {
      init("update");
    }, 700);
    return () => {
      clearInterval(interval.current);
      init("unmount");
    };
  }, [dispatch]);

  return (
    <div className="Counter">
      <h1>{state.counter}</h1>
      <button onClick={incrementCounterHandler}>Increase</button>
      <button onClick={decrementCounterHandler}>Decrease</button>
      <button onClick={() => addCounterHandler(5)}>Increase by 5</button>
      <button onClick={() => subtractCounterHandler(5)}>Decrease by 5</button>
    </div>
  );
};

export default withStore(Counter, reducer);
