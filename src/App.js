import React from 'react'
import Header from './Header/Header'
import PopularMovies from './Pages/PopularMovies'
import LatestMovies from './Pages/LatestMovies'
import ComedyMovies from './Pages/ComedyMovies'


const App = () => {
  return (
    <div>
        <Header />
        <PopularMovies />
        <LatestMovies />
        <ComedyMovies />
      
        
    </div>
  )
}

export default App