import React, { useReducer } from "react";
import ReducerAction from "./ReducerAction";

const UseReducer = () => {
  //useReducer=>same as useState hook but It will manage large number of operation in single state by dispatch
  //syntax-> const[state,dispatch]=useReducer(ReducerFn,initialValue)-> state is currentValue(update)
  //dispatch-> function that is used to pass the value like object(type:"ADD",payload:"10") to reducer function parameter
  //Reducer function has two parameter (state,action) state->initial value, action -> payload passed by dispatch

  const [state, dispatch] = useReducer(ReducerAction, 0);
  return (
    <div>
      <h1>Count: {state}</h1>
      <button
        className="border px-3 py-1 rounded-sm"
        onClick={() => dispatch({ type: "ADD", payload: 10 })}
      >
        ADD
      </button>
      <button
        className="border px-3 py-1 rounded-sm"
        onClick={() => dispatch({ type: "SUB", payload: 5 })}
      >
        Sub
      </button>
    </div>
  );
};

export default UseReducer;
