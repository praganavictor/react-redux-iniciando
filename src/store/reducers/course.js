import { actionsTypes } from "../constants/course";
const INITIAL_STATE = {
  activeLesson: {},
  activeModule: {},
  modules: [
    {
      id: 1,
      title: "Iniciando com React",
      lessons: [
        {
          id: 1,
          title: "primeira aula"
        },
        {
          id: 2,
          title: "segunda aula"
        }
      ]
    },
    {
      id: 2,
      title: "Iniciando com Redux",
      lessons: [
        {
          id: 3,
          title: "Terceira aula"
        },
        {
          id: 4,
          title: "Quarta aula"
        }
      ]
    }
  ]
};

const reducers = (state = INITIAL_STATE, { payload, type }) => {
  console.log("payload", payload);
  switch (type) {
    case actionsTypes.TOGGLE_LESSON:
      return {
        ...state,
        activeLesson: payload.lesson,
        activeModule: payload.module
      };
    default:
      return state;
  }
};

export { reducers };
