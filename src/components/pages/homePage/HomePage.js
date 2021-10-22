import React from "react";
import { Link } from "react-router-dom";
import { HomePageStyled } from "./HomePageStyled";


const HomePage = () => {
  return (
    <HomePageStyled>
      <h2 className='title'>Phonebook aplication </h2>
      <p className='text'>Hey ! in this application you can store your contacts, for which you need to  <Link to="/register">register</Link> or <Link to="/login">login</Link>.</p>
    <img src=''/>
    </HomePageStyled>
  );
};

export default HomePage;
