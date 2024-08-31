import { useState } from "react";
import Home from "./components/Home"
import styled, { createGlobalStyle } from "styled-components"
import FoodCard from "./components/FoodCard";


const GlobalStyled = createGlobalStyle`
  
  *{
    box-sizing: border-box;
    margin: 0;
    padding:0;
  }
  body{
    background-color: #323334;
    color:white;
    min-height: 100vh;
    background-image: url("images/AdobeStock_294263329_Preview.jpeg");
    /* background-image: url("https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg"); */
    background-size: cover;
    background-repeat: no-repeat;
    
  }
  

`;


function App() {
 
  


  return (
    <>
      <GlobalStyled/>
    <Home/>
         
    </>
  )
}

export default App
