import {useContext}from 'react'
import {SearchContext} from "../../store/search-store"

const SearchInput = ({search, onChangeText}) => {

  const searchCtx = useContext(SearchContext)

  const onChangeSearch = event => {
    searchCtx.searchOnChange(event.target.value)
  }
  
  return (
    <form className="form-inline d-flex gap-2 w-25">
      <input 
        value={searchCtx.search} 
        onChange={onChangeSearch}
        className="form-control mr-sm-2 w-75"
        type="search" 
        placeholder="Search"
        aria-label="Search"
      />
      <button className="btn btn-success my-2 my-sm-0" type="submit">Search</button>
  </form>
  )
}

export default SearchInput