import React, { useState } from "react";
import Footer from "../components/News/Footer";
import Navigation from "../components/News/Navbar";
import NewsList from "../components/News/NewsList";
// import { v4 as uuidv4 } from "uuid";
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { router } from "../utils/API/config";
//import LoadingBar from "react-top-loading-bar";

const News = () => {
  const [progress, setProgress] = useState(0);

  const pageSize = 7;

  document.body.style.backgroundColor = "rgb(36, 39, 41)";

  return (
    <>
      <Navigation />
      <Footer />
      <NewsList />
    </>
  );
}

export default News