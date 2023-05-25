import React from 'react'
import Header from './Header/Header'
import PopularMovies from './Pages/MoviePages'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ComedyMoviesAPI, LatestMoviesAPI, PopularMoviesAPI } from './URL/Url'
import MainPage from './Pages/MainPage'


const App = () => {
 
  
  return (
    <div>
     <MainPage /> 
    </div>
  )
}

export default App