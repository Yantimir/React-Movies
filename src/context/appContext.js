import React from "react";

export const AppContext = React.createContext({
    movies: [],
    isLoading: false,
    searchQuery: "",
    setSearchQuery: () => {},
    setTypeFilter: () => {},
    searchMovies: () => {},
    handleRequest: () => {},
    handleClickInputFilter: () => {}
});

AppContext.displayName = "AppContext";