import React from 'react'
import Movie from '../MovieBox/Movie'
import styles from "./MovieList.module.css"

const MovieList = ({movies}) => {



  const allMovies = movies.map((movie, idx) => (
    <Movie 
      key={movie.id + idx}
      id={movie.id}
      imgUrl={movie.poster_path}
      movieTitle={movie.original_title}
      releaseDate={movie.release_date}
      categories={movie.genre_ids} 
    />
  ))


  if(movies.length === 0) {
    return (
      <h1>
        Movie Not Found :|
      </h1>
    )
  }

  return (
    <div className={styles.container}>
      {allMovies}
    </div>
  )
}

export default MovieList