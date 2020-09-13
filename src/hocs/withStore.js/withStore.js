import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";

export default (WrappedComponent, reducer) => {
  const store = createStore(reducer, applyMiddleware(thunkMiddleware));
  return ({ ...props }) => (
    <Provider store={store}>
      <WrappedComponent {...props} />
    </Provider>
  );
};
