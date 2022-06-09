import React, { useContext } from "react";
import { AppContext } from "../../context/appContext";
import { Search } from "../Search/Search";
import { Movies } from "../Movies/Movies";
import { Preloader } from "../Preloader/Preloader";

export const Main = () => {

    const { movies, isLoading } = useContext(AppContext);

    return (
        <main className="main__container content">
            <Search />
            {isLoading && <Preloader />}
            {movies && <Movies movies={movies} />}
        </main>
    )
}
