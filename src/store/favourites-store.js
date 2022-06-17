import { createContext, useEffect, useState } from "react";

export const FavouritesContext = createContext({
    favouriteMovies: [],
    addMovieToFavourite: (movie) => {},
    deleteMovieFromFavourite: (deleteMovieId) => {}
})

const FavouritesContextProvider = (props) => {
    
    const [favouriteMovies, setFavouriteMovies] = useState([])

    // Local Storage: setting & getting data
    useEffect(() => {
        const favouriteItemsData = JSON.parse(localStorage.getItem('movies'))
        
        if (favouriteItemsData) {
            setFavouriteMovies(favouriteItemsData)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('movies', JSON.stringify(favouriteMovies))
    }, [favouriteMovies])



    const addMovieToFavourite = (movie) => {
        setFavouriteMovies(prevItems => [...prevItems, movie])
    }

    const deleteMovieFromFavourite = (id) => {
        setFavouriteMovies(prevItems => prevItems.filter(oldMovie => oldMovie.id !== id))  
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