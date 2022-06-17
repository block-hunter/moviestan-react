import {Route, Routes } from "react-router-dom"
import HomePage from "./pages/Home";
import MovieDetailPage from "./pages/MovieDetail";
import Layout from "./components/Layout/Layout"

import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import FavouritesPage from "./pages/Favourites";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie/:id" element={<MovieDetailPage />} />
          <Route path="/Favourites" element={<FavouritesPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;


