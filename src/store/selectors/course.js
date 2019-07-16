const selectors = {
  getModules: state => state.courseReducers.modules,
  getActiveLesson: state => state.courseReducers.activeLesson,
  getActiveModule: state => state.courseReducers.activeModule
};

export { selectors };
