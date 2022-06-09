import React from "react";

export const AppContext = React.createContext({
    movies: [],
    isLoading: false,
    searchQuery: "",
    setSearchQuery: () => {},
    typeFilter: "all",
    setTypeFilter: () => {},
    searchMovies: () => {},
    // handleInputChange: () => {}
});

AppContext.displayName = "AppContext";