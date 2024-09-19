const Search = ({value, onSearch}) => {
    return(
        <div>
            find country <input value={value} onChange={onSearch} />
        </div>
    )
}


export default Search