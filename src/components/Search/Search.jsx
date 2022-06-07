import React, { useState } from "react";

export const Search = () => {

    const [search, setSearch] = useState("");

    return (
        <div className="row">
            <div className="input-field">
                <input
                    className="validate"
                    placeholder="search"
                    type="search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
        </div>
    )
}
