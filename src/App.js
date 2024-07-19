import React,{Fragment} from "react";
import Header from "./components/layout/header";
import Meals from "./components/Meals/Meals";

function App() {
  return (
    <Fragment>
      <Header></Header>
      <main>
      <Meals></Meals>
      </main>
      </Fragment>
  );
}

export default App;
