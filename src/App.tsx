import React from "react";
import "./App.scss";
import Sidebar from "./components/Home/Home";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Home />
    </div>
  );
}

export default App;
