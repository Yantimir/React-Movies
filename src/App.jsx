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
    // console.log(typeFilter)

    useEffect(() => {
        setIsLoading(!isLoading);
        api.getMoviesList()
            .then(dataMovies => setMovies(dataMovies.Search))
            .catch(err => console.error(err))
            .finally(() => setIsLoading(isLoading))
        // eslint-disable-next-line    
    }, []);


    // useEffect(() => {
    //     handleRequest();
    //     // eslint-disable-next-line 
    // }, [searchQuery]);

    // const handleInputChange = (inputValue) => {
    //     setSearchQuery(inputValue);
    // }
    // const handleRequest = useCallback(() => {
    //     api.searchProducts(searchQuery)
    //         .then(dataMovies => setMovies(dataMovies.Search))
    //         .catch(err => console.error(err))
    // }, [searchQuery])
    const searchMovies = (str, type = "all") => {
        fetch(`http://www.omdbapi.com/?apikey=28dc1872&s=${str}${type !== "all" ? `&type=${type}` : ""}`)
            .then(res => res.json())
            .then(dataMovies => setMovies(dataMovies.Search))
            .catch((err) => console.error(err))
    }



    return (
        <AppContext.Provider value={{
            movies,
            isLoading,
            searchQuery,
            setSearchQuery,
            typeFilter,
            setTypeFilter,
            searchMovies,
            // handleInputChange
        }}>
            <div className="body__container">
                <Header />
                <Main />
                <Footer />
            </div>
        </AppContext.Provider>
    );
}

export default App;
