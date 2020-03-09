import USER_DATA from "../../data/rh.user.data.json";
import USER_TEST from "../../data/rh.user.test.json";
import TEST from "../../data/rh.test.data.json";
import POSIBILITE from "../../data/rh.posibilite.data.json";
const initialState = {
  dashbord: "list",
  modalVisibel: false,
  userList: [],
  userDetails: [],
  userDetailsTest: [],
  detailInModal: [],
  test: TEST,
  posibilite: POSIBILITE
};

const rh = (state, action) => {
  switch (action.type) {
    case "CHANGE_DASH":
      return { ...state, dashbord: action.payload };
    case "SET_MODAL_VISIBLE":
      return { ...state, modalVisibel: action.payload };
    case "ADD_NEW_USER":
      console.log("new user added => ", action.payload);
      return state;
    case "GET_ALL_USER":
      return { ...state, userList: USER_DATA };
    case "GET_DETAILS_USER":
      const user = USER_DATA.filter(id => id.id === action.payload);
      const userTest = USER_TEST.filter(id => id.id === action.payload);
      return {
        ...state,
        userDetails: user[0],
        userDetailsTest: userTest[0].test
      };
    case "DETAILS_IN_MODAL":
      let detail = [];
      state.userDetailsTest.forEach(element => {
        if (element.id_test === action.payload) {
          detail = element;
        }
      });
      TEST.forEach(el => {
        if (el.id_test === detail.id_test) {
          detail.questions = el.questions;
        }
      });
      return { ...state, detailInModal: detail };
    default:
      return state;
  }
};

export { initialState, rh };
