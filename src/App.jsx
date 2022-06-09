import { useCallback, useEffect, useState } from "react";
import api from "./utils/Api";
import { AppContext } from "./context/appContext";

import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Footer } from "./components/Footer/Footer";

function App() {

    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [typeFilter, setTypeFilter] = useState("all");

    useEffect(() => {
        setIsLoading(!isLoading);
        api.getMoviesList()
            .then((dataMovies) => setMovies(dataMovies.Search))
            .catch((err) => console.error(err))
            .finally(() => setIsLoading(isLoading))
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        handleRequest(searchQuery, typeFilter);
        // eslint-disable-next-line
    }, [typeFilter]);

    const handleClickInputFilter = (e) => {
        setTypeFilter(e.target.dataset.type);
    };

    const handleRequest = useCallback(() => {
        setIsLoading(!isLoading);
        api.searchMovies(searchQuery, typeFilter)
            .then((dataMovies) => setMovies(dataMovies.Search))
            .catch((err) => console.error(err))
            .finally(() => setIsLoading(isLoading))
        // eslint-disable-next-line
    }, [searchQuery, typeFilter]);

    return (
        <AppContext.Provider
            value={{
                movies,
                isLoading,
                searchQuery,
                setSearchQuery,
                typeFilter,
                handleRequest,
                handleClickInputFilter,
            }}
        >
            <div className="body__container">
                <Header />
                <Main />
                <Footer />
            </div>
        </AppContext.Provider>
    );
}

export default App;
