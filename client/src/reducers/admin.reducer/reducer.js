const initialState = {
  dashbord: "listTest"
};

const admin = (state, action) => {
  switch (action.type) {
    case "CHANGE_DASH":
      return { ...state, dashbord: action.payload };
    default:
      return state;
  }
};

export { initialState, admin };
