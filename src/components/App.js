// @flow
import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Main from "./Main";

const App = () =>
  <div>
    <Header />
    <div style={{ display: "flex" }}>
      <div>
        <Sidebar />
      </div>
      <div style={{ margin: "0 1.5rem 0 1.5rem", maxWidth: "35rem" }}>
        <Main />
      </div>
    </div>
  </div>;

export default App;
