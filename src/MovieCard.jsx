import React from "react";

const MovieCard = ({givenMovie}) => {
    return (
        <div className = "movie">
            <div>
                <p>{givenMovie.Year}</p>
            </div>

            <div>
                <img
                    src = {givenMovie.Poster !== 'N/A' ? givenMovie.Poster : 'https://via.placeholder.com/400'}
                    alt = {givenMovie.Title}
                />
            </div>

            <div>
                <span>{givenMovie.Type}</span>
                <h3>{givenMovie.Title}</h3>
            </div>
        </div>
    )
}

export default MovieCard