import {useEffect} from 'react';

import './App.css'
import SearchIcon from './search.svg'

const API_address = 'http://www.omdbapi.com?apikey=a0a889e7' 
const movie1 = {
    "Title": "Whatever",
    "Year": "1998",
    "imdbID": "tt0140688",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZmI4ZDE5NTgtYTg0Ny00MzEzLTlhOWMtMmFjZDQyZDc2OWViXkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_SX300.jpg"
}

const App = () => {
    const searchMovies = async(name) => {
        const API_response = await fetch(`${API_address}&s=${name}`);
        const data = await API_response.json();
        console.log(data.Search);
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
                    value = "whatever"
                    onChange = {() => {}}
                />
                <img
                    src = {SearchIcon}
                    alt = "search"
                    onClick = {() => {}}
                />
            </div>
            <div className = "container">
                <div className = "movie">
                    <div>
                        <p>{movie1.Year}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;