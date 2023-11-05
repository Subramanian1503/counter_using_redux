// Action types
export const ADD_COUNTER = "ADD_COUNTER";
export const MINUS_COUNTER = "MINUS_COUNTER";

// Action creators
export const addCounter = (count) => {
  console.log("Add counter called");
  return {
    type: ADD_COUNTER,
    count: count,
  };
};

export const minusCounter = (count) => {
  return {
    type: MINUS_COUNTER,
    count: count,
  };
};
