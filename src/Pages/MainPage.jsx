import React from "react";
import MoviePages from "./MoviePages";
import { ComedyMoviesAPI, LatestMoviesAPI, PopularMoviesAPI } from "../URL/Url";
import Header from "../Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const MainPage = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/popularmovies"
            element={
              <MoviePages apiURL={PopularMoviesAPI} name={"POPULAR MOVIES"} />
            }
          />
          <Route
            path="/latestmovies"
            element={
              <MoviePages apiURL={LatestMoviesAPI} name={"LATEST MOVIES"} />
            }
          />

          <Route
            path="/comedymovies"
            element={
              <MoviePages apiURL={ComedyMoviesAPI} name={"COMEDY MOVIES"} />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default MainPage;
