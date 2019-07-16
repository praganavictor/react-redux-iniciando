import React from "react";
import { useSelector } from "react-redux";

import { selectors } from "../../store/selectors/course";

const Video = () => {
  const activeLesson = useSelector(selectors.getActiveLesson);
  const activeModule = useSelector(selectors.getActiveModule);
  return (
    <>
      <strong>Modulo {activeModule.title}</strong>
      <span>Aula {activeLesson.title}</span>
    </>
  );
};

export default Video;
