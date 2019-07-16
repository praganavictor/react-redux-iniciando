import { actionsTypes } from "../constants/course";

const actions = {
  toggleLesson: payload => ({
    payload,
    type: actionsTypes.TOGGLE_LESSON
  })
};

export { actions };
