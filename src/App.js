import React from "react";
import { Provider } from "react-redux";

import Sidebar from "./components/sidebar";
import Video from "./components/video";

import store from "./store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <h1>Branch WIP funciona!</h1>
        <Video />
        <Sidebar />
      </Provider>
    </div>
  );
}

export default App;
