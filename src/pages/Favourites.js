import { useContext } from "react"
import {Link} from "react-router-dom"
import MovieList from '../components/MovieList/MovieList'
import { FavouritesContext } from "../store/favourites-store"
import styles from "./Favourites.module.css"


const FavouritesPage = () => {

    console.log("test")
    const favouritesCtx = useContext(FavouritesContext)

    console.log(favouritesCtx)

    if(favouritesCtx.favouriteMovies.length === 0) {
        return(
            <div className={styles['error-container']}>
                <h1 className='fw-bold'>Nothing To See Here 😔</h1>
                <h3> You can add here</h3>
                <Link to="/">Go To HomePage</Link>
            </div>
        )
    }

    return (
        <div className={styles["home-container"]}>

            <div className={styles.altNav + ' row my-5 text-capitalize font-bold'} >
            
                <div className='col-4 d-flex  align-items-end justify-content-start gap-4 fs-5'>
                    <Link to="/">
                        <div>All Movies</div>
                    </Link>
                    <Link to="/Favourites">
                        <div className={styles["active-section"]}>Watch List</div>
                    </Link>
                </div>

                <div className='col-8 d-flex justify-content-end'>
                    <select className='form-select w-25'>
                        <option value="popularity">Popularity</option>
                        <option value="year">Year</option>
                        <option value="watched">Watched</option>
                    </select>
                </div>
            </div>

            <div>
                {/* movie list */}
                <MovieList movies={favouritesCtx.favouriteMovies} />
                {                    console.log(favouritesCtx.favouriteMovies)
                }
            </div>
        </div>
    )
}

export default FavouritesPage