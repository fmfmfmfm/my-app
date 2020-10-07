import React from "react";
import { useLocation } from "react-router-dom";

const News = () => {
  const { pathname } = useLocation();
  
  return (
      <div>
      <h1>Contact</h1>
      <p>当前 URL: {pathname}</p>
      
      </div>
  )
};
export default News;