import { createContext, useState } from "react";

export const SearchContext = createContext({
    search: '',
    pastSearchs: [],
    searchOnChange: (searchText) => {},
    addPastSearch: ({text}) => {}

})

const SearchContextProvider = (props) => {

    const [searchValue, setSearchValue] = useState('')

    // getting past searchs from local
    let pastSearchsFromLocal = localStorage.getItem('searchs')
    const [pastSearchs, setPastSearchs] = useState(pastSearchsFromLocal)

    const searchOnChange = (newSearch) => {
        setSearchValue(newSearch)
    }

    const addPastSearchs = (searchText) => {
        setPastSearchs(prevValue => {
            const newValue = prevValue.concat({text: searchText})
            return newValue
        })
    }

    const context = {
        search: searchValue,
        searchOnChange: searchOnChange,
        pastSearchs: pastSearchs,
        addPastSearch: addPastSearchs,
    }


    return(
        <SearchContext.Provider value={context}>
            {props.children}
        </SearchContext.Provider>
    )
}

export default SearchContextProvider