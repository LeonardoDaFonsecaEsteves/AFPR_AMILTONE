import test_en_dur from "./constantes/test.constantes";

const initialState = {
  id_user: "",
  nom: "",
  prenom: "",
  langage: "",
  id_test: 1,
  questions: [],
  test_level: "",
  duree: "",
  isEnded: false,
  question: [],
  answers: [],
  indexQuestion: 0,
  timer: "",
  loading: true,
  error: null
};

const questionnaire = (state, action) => {
  switch (action.type) {
    case "getQuestionnaire":
      return {
        ...state,
        ...test_en_dur,
        questions: test_en_dur.questions,
        timer: test_en_dur.questions[0].time
      };
    case "getAnswer":
      let answersTemp = [...state.answers];
      answersTemp.push(action.payload);
      return {
        ...state,
        answers: answersTemp
      };
    case "setIndex":
      return {
        ...state,
        indexQuestion: state.indexQuestion + 1,
        timer: test_en_dur.questions[state.indexQuestion + 1].time
      };
    case "decreaseTime":
      return { ...state, timer: state.timer - 1000 };
    case "apiCallSucess":
      return { ...state, loading: action.payload };
    case "apiCallError":
      return { ...state, error: action.payload };
    case "endTest":
      return { ...state, isEnded: true };
    default:
      return state;
  }
};

const setCheckedPossibilities = answers => {
  let result = [...answers];
  return result.map(answer => {
    return { ...answer, isChecked: false };
  });
};

export { initialState, questionnaire, setCheckedPossibilities };
