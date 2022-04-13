import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import NavBar from "../components/News/Navbar";
import NewsList from "../components/News/NewsList";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { router } from "../utils/API/config";
//import LoadingBar from "react-top-loading-bar";

const News = () => {
  const [progress, setProgress] = useState(0);

  const pageSize = 7;

  document.body.style.backgroundColor = "rgb(36, 39, 41)";

  return (
    <>
      <BrowserRouter>
        <NavBar />
        {/* <LoadingBar color="#005abb" height={3} progress={progress} /> */}
        <Routes>
          {
            router.map(path =>
              <Route
                exact
                key={uuidv4()}
                path={path.path}
                element={
                  <NewsList
                    setProgress={setProgress}
                    key={path.key}
                    category={path.category}
                    pageSize={pageSize}
                    country={path.country}
                  />
                }
              />
            )
          }
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default News