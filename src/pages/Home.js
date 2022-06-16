import React, { useEffect, useState, useContext } from 'react'
import styles from "./Home.module.css"
import MovieList from '../components/MovieList/MovieList'
import axios from "axios"
import { SearchContext } from '../store/search-store'



const HomePage = () => {

    const searchCtx = useContext(SearchContext)
    const [movies, setMovies] = useState([])

    //infinity scroll default value = page 1
    let offset = 1


    const getAllMovies = async () => {
        // get now playing movies first page init 
        let url = `https://api.themoviedb.org/3/movie/now_playing?api_key=b70f3086a20d2232a314c0f03efeb5d3&page=${offset}`

        try {
            let response = await axios.get(url).then(res => res.data);
    
            // check request errors
            if (response.Response === "False") {
                throw Error(response.Error);
            } 

            // check is search movies
            if(searchCtx.search.length > 3) {
                
                if(response.Results.length > 0) setMovies(response.Results)
                return
            }


            setMovies(prevValue => {
                const newArr = [...prevValue, ...response.results]
                return newArr
            })
            
        } catch (error) {
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

    return (
        <div className={styles["home-container"]}>

            <div className={styles.altNav + ' row my-5 text-capitalize font-bold'} >
            
                <div className='col-4 d-flex  align-items-end justify-content-start gap-4 fs-5'>
                    <div className={styles["active-section"]}>All Movies</div>
                    <div>Watch List</div>
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