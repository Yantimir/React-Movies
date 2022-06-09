import React, { useContext } from "react";
import { AppContext } from "../../context/appContext";

export const Search = () => {

    const {
        searchQuery,
        setSearchQuery,
        typeFilter,
        setTypeFilter,
        searchMovies
    } = useContext(AppContext);

    const handleKey = (e) => {
        if (e.key === "Enter" && searchQuery !== "") {
            searchMovies(searchQuery, typeFilter);
        }
    }

    const handleFilter = (e) => {
        setTypeFilter(e.target.dataset.type);
        // setTypeFilter(
        //     (e) => ({e.target.dataset.type}), 
        //     () => {searchMovies(searchQuery, typeFilter)
        // });
        searchMovies(searchQuery, typeFilter);
    }

    const handleClickInputFilter = () => {
        searchMovies(searchQuery, typeFilter);
    }

    return (
        <div className="row">
            <div className="input-field">
                <input
                    className="validate"
                    placeholder="search..."
                    type="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
                    onKeyDown={handleKey}
                />
                <button className="btn search-btn" onClick={() => searchQuery !== "" && searchMovies(searchQuery, typeFilter)}>Search</button>
            </div>
            <div>
                <label>
                    <input
                        className="with-gap"
                        name="type"
                        type="radio"
                        data-type="all"
                        onChange={handleFilter}
                        onClick={handleClickInputFilter}
                        checked={typeFilter === "all"}
                    />
                    <span>All</span>
                </label>
                <label>
                    <input
                        className="with-gap"
                        name="type"
                        type="radio"
                        data-type="movie"
                        onChange={handleFilter}
                        onClick={handleClickInputFilter}
                        checked={typeFilter === "movie"}
                    />
                    <span>Movies only</span>
                </label>
                <label>
                    <input
                        className="with-gap"
                        name="type"
                        type="radio"
                        data-type="series"
                        onChange={handleFilter}
                        onClick={handleClickInputFilter}
                        checked={typeFilter === "series"}
                    />
                    <span>Series only</span>
                </label>
            </div>
        </div>
    )
}
