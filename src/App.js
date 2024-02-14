import React from "react";
import MyNav from "./components/myNav/MyNav"
import Welcome from "./components/welcome/Welcome";
import AllTheBooks from "./components/allTheBooks/AllTheBooks";
import MyFooter from "./components/myFooter/MyFooter";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div className="bg-dark-subtle">
      <MyNav />
      <Welcome />
      <AllTheBooks />
      <MyFooter />
    </div>
  );
};

export default App;