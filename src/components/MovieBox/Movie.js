import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import {FavouritesContext} from '../../store/favourites-store'
import styles from "./Movie.module.css"

const Movie = ({id, movieTitle, imgUrl, releaseDate, categories}) => {

  const favouritesCtx = useContext(FavouritesContext)

  // let posterUrl = "https://image.tmdb.org/t/p/w500/" + imgUrl
  // let releaseYear = releaseDate.slice(0, 4)

  let posterUrl =''
  let releaseYear =''
  console.log(releaseDate)
  // let category = categories.map(category => category.name) 

  const AddToFavouriteHandler = () => {
    const movie = {
      id: id,
      movieTitle: movieTitle,
      imgUrl: imgUrl,
      releaseDate: releaseDate,
      categories: categories
    }

    favouritesCtx.addMovieToFavourite(movie)
  }

  return (

      <div className={"g-col-3 relative bg-white d-flex flex-column justify-content-start  align-items-center " + styles["movie-box"]}>
        <Link to={"/movie/" + id} className={styles.link} style={{textDecoration: 'none'}}>
          <img src={posterUrl} alt={movieTitle} className={styles["poster-img"]} />
        </Link>
        
        <div className='w-100 px-3 py-1 d-flex justify-content-between align-items-center'>
          <Link to={"/movie/" + id} className={styles.link} style={{textDecoration: 'none'}}>

            <div className=''>
              <p className={styles["movie-title"]}>
                {movieTitle}
              </p>
              <p className='font-weight-light'>Drama ({releaseYear}) </p>
            </div>
          </Link>

          <button className='btn btn-success' onClick={AddToFavouriteHandler}>
            +
          </button>
        </div>
      </div>
  )
}

export default Movie