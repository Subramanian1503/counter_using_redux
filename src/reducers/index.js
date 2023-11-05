import { ADD_COUNTER, MINUS_COUNTER } from "../actions";

export default function counter(state = 0, action) {
  switch (action.type) {
    case ADD_COUNTER:
      return action.count + 1;
    case MINUS_COUNTER:
      return action.count - 1;
    default:
      return state;
  }
}
