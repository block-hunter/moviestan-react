import { createContext, useEffect, useState } from "react";

export const FavouritesContext = createContext({
    favouriteMovies: [],
    addMovieToFavourite: (movie) => {},
    deleteMovieFromFavourite: (deleteMovieId) => {}
})

const FavouritesContextProvider = (props) => {

    const [favouriteMovies, setFavouriteMovies] = useState([])
    // new value type
    // id, name, img, year, category

    const addMovieToFavourite = (movie) => {
        setFavouriteMovies([...favouriteMovies, movie])
    }   

    useEffect(() => {

        let localMovies =localStorage.getItem('movies')

        if(localMovies !== '') {
            setFavouriteMovies(JSON.parse(localMovies))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('movies', JSON.stringify(favouriteMovies))
    }, [favouriteMovies])
    

    console.log(favouriteMovies[0])

    const deleteMovieFromFavourite = (deleteMovieId) => {
        setFavouriteMovies(prevValue => {
            const updatedArr = prevValue.filter(movie => movie.id !== deleteMovieId)

            return updatedArr
        })

        localStorage.setItem('movies', JSON.stringify(favouriteMovies))
    }

    const context = {
        favouriteMovies: favouriteMovies,
        addMovieToFavourite: addMovieToFavourite,
        deleteMovieFromFavourite: deleteMovieFromFavourite
    }
    
    return (
        <FavouritesContext.Provider value={context}>
            {props.children}
        </FavouritesContext.Provider>
    )
} 

export default FavouritesContextProvider