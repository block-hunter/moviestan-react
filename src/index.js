import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import FavouritesContextProvider from './store/favourites-store';
import SearchContextProvider from './store/search-store';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <SearchContextProvider>
            <FavouritesContextProvider>
                <App />
            </FavouritesContextProvider>
        </SearchContextProvider>
    </BrowserRouter>
)