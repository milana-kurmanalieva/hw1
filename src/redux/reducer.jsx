const initialState = {
  count: 0,
};

export const options = [
  { type: "INCREMENT", title: "+1", value: 1 },
  { type: "DECREMENT", title: "-1", value: 1 },
  { type: "RESET", title: "0", value: 0 },
  { type: "TEN", title: "+10", value: 10 },
  { type: "MINUS_TEN", title: "-10", value: 10 },
];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + action.payload };
    case "DECREMENT":
      return { ...state, count: Math.max(0, state.count - action.payload) };
    case "RESET":
      return { ...state, count: (state.count = action.payload) };
    case "TEN":
      return { ...state, count: state.count + action.payload };
    case "MINUS_TEN":
      return { ...state, count: Math.max(0, state.count - action.payload) };
    default:
      return state;
  }
}
