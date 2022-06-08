import React from "react";

export const Search = ({ handleSearchQuery, searchMovies }) => {

    // const [searchQuery, setSearchQuery] = useState("");

    // const handleKey = (event) => {
    //     if (event.key === "Enter") {
    //         handleSearchQuery(inputValue);
    //     }
    // }
    const handleKey = (event) => {
        if (event.key === "Enter") {
            searchMovies();
        }
    }
    // const searchMovies = (str) => {
    //     fetch(`http://www.omdbapi.com/?apikey=28dc1872&s=${str}`)
    //         .then(res => res.json())
    //         .then(dataMovies => setMovies(dataMovies.Search))
    //         .catch((err)=> console.error(err))
    // }

    return (
        <div className="row">
            <div className="input-field">
                <input
                    className="validate"
                    placeholder="search..."
                    type="search"
                    // value={searchQuery}
                    onChange={(e) => handleSearchQuery(e.target.value.toLowerCase())}
                    onKeyDown={handleKey}
                />
                <button className="btn search-btn" onClick={searchMovies}>Search</button>
            </div>
        </div>
    )
}
