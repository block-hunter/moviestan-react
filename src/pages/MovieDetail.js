import React, { useEffect, useState } from 'react'
import styles from "./MovieDetail.module.css"
import { useParams, Link } from 'react-router-dom'
import axios from "axios"

const MovieDetailPage = () => {

  const {id} = useParams()
  const [movieDetail, setMovieDetail] = useState({})
  let posterUrl = "https://image.tmdb.org/t/p/w500/"

  const getMovieDetail = async () => {

    let url = `https://api.themoviedb.org/3/movie/${id}?api_key=b70f3086a20d2232a314c0f03efeb5d3`

    try {
        let response = await axios.get(url).then(res => res.data);

        // check request errors
        if (response.Response === "False") {
            throw Error(response.Error);
        } 

        setMovieDetail(response)
        
    } catch (error) {
        throw error.message;
    }
  }

  useEffect(() => {
    getMovieDetail()
  }, [])


  // const movieGenres = movieDetail.genres.map(genre => (
  //   <div key={genre.id} className='genre'>
  //     {genre.name}, 
  //   </div>
  // ))

  return (
    <div className={styles.container}>
      <div className={styles.breadcrumb}>
        <Link to='/' className={styles["back-link"]}>
          <div> &lt; back to Movielist</div>
        </Link>

        <span>
          <div>Home</div>
          &gt; 
          {/* {movieGenres} */}
          <div>demo genre</div>
          &gt;
          <div>
            {movieDetail.title}
          </div>
        </span>
      </div>

      <section className={styles["movie-detail"]}>
        <img src={posterUrl + movieDetail.poster_path} className={styles["movie-poster"]} alt='movie name' />

        <div className={styles['movie-desc']}>
          <h1>{movieDetail.title}</h1>
          
          <div>
            <p className={styles.title}>genre</p>
            {/* ERR:: check genre mapping error */}
            <span>Demo Genre</span>
          </div>
      
          <div>
            <p className={styles.title}>Release Date</p>
            <span>{movieDetail.release_date}</span>
          </div>
         
          <div>
            <p className={styles.title}>Language</p>
            <span>
              {movieDetail.original_language}
            </span>
          </div>
         
          <div>
            <p className={styles.title}>overview</p>
            <span className='w-25'>
              {movieDetail.overview}
            </span>
          </div>

          <button>ADD TO FAVOURITE</button>
        </div>
      </section>
    </div>
  )
}

export default MovieDetailPage