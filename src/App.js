import {useEffect, useState} from 'react';

import './App.css'
import SearchIcon from './search.svg'
import MovieCard from './MovieCard';

const API_address = 'http://www.omdbapi.com?apikey=a0a889e7' 
const movie1 = {
    "Title": "Whatever",
    "Year": "1998",
    "imdbID": "tt0140688",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZmI4ZDE5NTgtYTg0Ny00MzEzLTlhOWMtMmFjZDQyZDc2OWViXkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_SX300.jpg"
}

const App = () => {
    //default value = empty array
    const [moviesList, setMoviesList] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async(name) => {
        const API_response = await fetch(`${API_address}&s=${name}`);
        const data = await API_response.json();
        setMoviesList(data.Search);
    }

    useEffect(() => {
        searchMovies('whatever');
    }, []);

    return (
        <div className = "app">
            <h1>MovieWatch</h1>
            <div className = "search">
                <input
                    placeholder = "Type here to search a movie..."
                    value = {searchTerm}
                    onChange = {(event) => setSearchTerm(event.target.value)}
                />
                <img
                    src = {SearchIcon}
                    alt = "search"
                    onClick = {() => searchMovies(searchTerm)}
                />
            </div>

            {/*down below is a dynamic block of code*/}
            {
                moviesList?.length > 0 ? (
                <div className = "container">
                    {moviesList.map((movie) => (
                        <MovieCard givenMovie = {movie} />
                    ))}
                </div>
                ) :
                (
                    <div className = "empty">
                        <h2>No movies found!</h2>
                    </div>
                )
            }

            <div className = "container">
                <MovieCard givenMovie = {movie1} />
            </div>
        </div>
    );
}

export default App;