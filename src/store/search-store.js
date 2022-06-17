import { createContext, useState } from "react";

export const SearchContext = createContext({
    search: '',
    searchOnChange: (searchText) => {},
})

const SearchContextProvider = (props) => {

    const [searchValue, setSearchValue] = useState('')

    const searchOnChange = (newSearch) => {
        setSearchValue(newSearch)
    }

    const context = {
        search: searchValue,
        searchOnChange: searchOnChange,
    }


    return(
        <SearchContext.Provider value={context}>
            {props.children}
        </SearchContext.Provider>
    )
}

export default SearchContextProvider