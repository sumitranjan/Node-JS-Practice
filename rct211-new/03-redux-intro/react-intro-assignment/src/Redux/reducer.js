const reducer = (oldState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD":
      return { ...oldState, count: oldState.count + payload };
    case "REDUCE":
      return { ...oldState, count: oldState.count - payload };
    default:
      return oldState;
  }
};
export { reducer };