import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { actions } from "../../store/actions/course";
import { selectors } from "../../store/selectors/course";

const Sidebar = () => {
  const allModules = useSelector(selectors.getModules);
  const dispatch = useDispatch();

  const handleClick = (module, lesson) =>
    dispatch(actions.toggleLesson({ module, lesson }));
  return (
    <aside>
      {allModules.map(module => (
        <div key={module.id}>
          <strong>{module.title}</strong>
          <ul>
            {module.lessons.map(lesson => (
              <li key={lesson.id}>
                {lesson.title}
                <button onClick={() => handleClick(module, lesson)}>
                  Selecionar
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;
