import React from "react";
import { Provider } from "react-redux";

import "./config/ReactotronConfig";

import Sidebar from "./components/sidebar";
import Video from "./components/video";

import store from "./store";

console.tron.log("testando");

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Video />
        <Sidebar />
      </Provider>
    </div>
  );
}

export default App;
