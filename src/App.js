/* eslint-disable no-unused-vars */
import { useEffect, useState} from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom"
import HomePage from "./pages/Home";
import MovieDetailPage from "./pages/MovieDetail";
import Layout from "./components/Layout/Layout"

import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"

const App = () => {

  // Movies States
  const [movies, setMovies] = useState([])
  // const [searchText, setSearchText] = useState('avengers')
  // console.log(movies)
  // const getMovies = async (search) => {
  //   const url = `http://omdbapi.com/?s=${search}&apikey=213fa4ba`

  //   const response = await fetch(url)

  //   if(!response.ok){
  //       console.log('fetching error check api')
  //       return
  //   }

  //   const body = await response.json()


  //   if(body.Search) {
  //       setMovies(body.Search)
  //   }

  // }

  // useEffect(() => {
  //   getMovies(searchText)
  // }, [searchText])

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage movies={movies} />} />
          <Route path="/movie/:id" element={<MovieDetailPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;


