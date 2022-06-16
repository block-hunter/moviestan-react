import { createContext, useState } from "react";

const FavouritesContext = createContext({
    favouriteMovies: [],
    addMovieToFavourite: (movie) => {},
    deleteMovieFromFavourite: (deleteMovieId) => {}
})

const FavouriteContextProvider = (props) => {


    // get local storage data first
    const storedMovies = JSON.parse(localStorage.getItem('movies'))

    const [favouriteMovies, setFavouriteMovies] = useState(storedMovies)
    // new value type
    // id, name, img, year, category, link

    const addMovieToFavourite = (movie) => {
        setFavouriteMovies(prevValue => {
            const updatedArr = prevValue.concat(movie)

            return updatedArr
        })

        localStorage.setItem('movies', favouriteMovies)
    }   

    const deleteMovieFromFavourite = (deleteMovieId) => {
        setFavouriteMovies(prevValue => {
            const updatedArr = prevValue.filter(movie => movie.id !== deleteMovieId)

            return updatedArr
        })

        localStorage.setItem('movies', favouriteMovies)
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

export default FavouriteContextProvider