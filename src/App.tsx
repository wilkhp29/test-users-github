import React from "react";
import "./App.css";
import AppContext from "./Contex";
import Users from "./Components/Users";
import Removes from "./Components/Removes";

function App() {
  return (
    <AppContext>
      <Users />
      <Removes />
    </AppContext>
  );
}

export default App;
