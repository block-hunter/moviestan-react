import React, { useEffect, useState, useContext } from 'react'
import styles from "./Home.module.css"
import MovieList from '../components/MovieList/MovieList'
import axios from "axios"
import { SearchContext } from '../store/search-store'
import Loader from '../components/Loader/Loader'
import {Link} from "react-router-dom"


const HomePage = () => {

    const [movies, setMovies] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    //infinity scroll default value = page 1
    let offset = 1


    const getAllMovies = async () => {
        // get now playing movies first page init 
        let url = `https://api.themoviedb.org/3/movie/now_playing?api_key=b70f3086a20d2232a314c0f03efeb5d3&page=${offset}`
        setIsLoading(true)

        try {
            let response = await axios.get(url).then(res => res.data);
    
            // check request errors
            if (response.Response === "False") {
                throw Error(response.Error);
            } 

            setMovies(prevValue => {
                const newArr = [...prevValue, ...response.results]
                return newArr
            })

            setIsLoading(false)
            
        } catch (error) {
            setIsLoading(false)
            setError(error.message)
            throw error.message;
        }
    }

    const handleScroll = (e) => {
        if(window.innerHeight + e.target.documentElement.scrollTop + 1 > e.target.documentElement.scrollHeight) {
            offset += 1
            getAllMovies()
        }
    }

    useEffect(() => {
        getAllMovies()
        window.addEventListener('scroll', handleScroll)
    }, [])


    const searchList = () => {
        
    }


    if(isLoading) {
        return(
            <div className={styles["loader-container"]}>
                <Loader />
            </div>
        )
    }


    if(error !== null) {
        return (
            <div className={styles['error-container']}>
                <h1 className='fw-bold'>Sorry 😔</h1>
                <p>{error}</p>
            </div>
        ) 
    }



    return (
        <div className={styles["home-container"]}>

            <div className={styles.altNav + ' row my-5 text-capitalize font-bold'} >
            
                <div className='col-4 d-flex  align-items-end justify-content-start gap-4 fs-5'>
                    <div className={styles["active-section"]}>All Movies</div>
                    <Link to="/Favourites">
                        <div>Watch List</div>
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
                <MovieList movies={movies} />
            </div>
        </div>
    )
}

export default HomePage