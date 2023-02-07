import {useEffect, useState} from 'react';

import './App.css'
import SearchIcon from './search.svg'
import MovieCard from './MovieCard';

const API_address = 'http://www.omdbapi.com?apikey=a0a889e7' 

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
        searchMovies('spider');
    }, []);

    return (
        <div className = "app">
            <h1>MovieFinder</h1>
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
        </div>
    );
}

export default App;