const initialState = {
  firstState: [],
};

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case "set":
      return { ...state, ...rest };
    case "firstAction":
      return { ...state, firstState: rest.data };

    default:
      return state;
  }
};

export default changeState;
