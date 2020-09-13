import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import "./Counter.css";
import {addCounter, decrementCounter, fetchCounter, incrementCounter, subtractCounter} from "../../store/actions";

const Counter = () => {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const incrementCounterHandler = () => dispatch(incrementCounter());
  const decrementCounterHandler = () => dispatch(decrementCounter());
  const addCounterHandler = (value) => dispatch(addCounter(value));
  const subtractCounterHandler = (value) => dispatch(subtractCounter(value));

  useEffect(() => {
    dispatch(fetchCounter());
  }, [dispatch]);

  return (
    <div className="Counter">
      <h1>{counter}</h1>
      <button onClick={incrementCounterHandler}>Increase</button>
      <button onClick={decrementCounterHandler}>Decrease</button>
      <button onClick={() => addCounterHandler(5)}>Increase by 5</button>
      <button onClick={() => subtractCounterHandler(5)}>Decrease by 5</button>
    </div>
  );
};

export default Counter;