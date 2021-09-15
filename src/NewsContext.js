import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState();

 const newslist =async()=>{
  const response =await fetch(
    `https://newsapi.org/v2/everything?q=tesla&from=2021-08-15&sortBy=publishedAt&apiKey=${process.env.REACT_APP_API_KEY}`
  )
  setData(await response.json())
 } 

  useEffect(()=>{
    newslist();
  },[])

  return (
    <NewsContext.Provider value={{ data }}>
      {props.children}
    </NewsContext.Provider>
  );
};
