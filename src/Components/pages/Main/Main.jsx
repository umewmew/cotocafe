import React from "react";
import CatCardList from "../../../Mocks/CatCardList";
import About from "../../blocks/About/About";
import CatsList from "../../blocks/CatsList/CatsList";


function Main() {
  return (
    <div>
      <About />
      <CatsList catInfo={CatCardList}/>
    </div>
  );
}

export default Main;
