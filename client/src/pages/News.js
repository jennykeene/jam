import React from "react";
import Footer from "../components/News/Footer";
import Navigation from "../components/News/Navbar";
import NewsList from "../components/News/NewsList";


const News = () => {

  return (
    <>
      <Navigation />
      <Footer />
      <NewsList />
    </>
  );
}

export default News