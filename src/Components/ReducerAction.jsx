//Here we are only define ReducerAction as function not a component so we directly export it without receiving as props
 const ReducerAction = (value, action) => {
  // reducer logic
  //   console.log(value);
  //   console.log(action);

  switch (action.type) {
    case "ADD": {
      return value + action.payload;
    }
    case "SUB": {
      return value - action.payload;
    }
    default: {
      return value;
    }
  }
};

export default ReducerAction;
