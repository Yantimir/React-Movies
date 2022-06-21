import React, { useContext, useState } from "react";
import { AppContext } from "../../context/appContext";
import api from "../../utils/Api";

export const Search = () => {

    const {
        searchQuery,
        setSearchQuery,
        typeFilter,
        handleClickInputFilter,
        handleRequest
    } = useContext(AppContext);



    const handleKey = (e) => {
        if (e.key === "Enter" && searchQuery !== "") {
            api.searchMovies(searchQuery, typeFilter);
        }
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
                <button className="btn search-btn" onClick={() => searchQuery !== "" && handleRequest(searchQuery, typeFilter)}>Search</button>
            </div>
            <div>
                <label>
                    <input
                        className="with-gap"
                        name="type"
                        type="radio"
                        data-type="all"
                        onChange={handleClickInputFilter}
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
                        onChange={handleClickInputFilter}
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
                        onChange={handleClickInputFilter}
                        checked={typeFilter === "series"}
                    />
                    <span>Series only</span>
                </label>
            </div>
        </div>
    )
}
