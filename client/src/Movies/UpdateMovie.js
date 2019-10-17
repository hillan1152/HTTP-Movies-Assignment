import React, { useState, useEffect } from 'react';
import axios from 'axios';

const initialMovie = {
    id: '',
    title: '',
    director: '',
    metascore: '',
    stars: []
}

const UpdateMovie = () => {
    const [movie, setMovie] = useState(initialMovie);

    // useEffect(() => {
    //     return `${movie.id}` === props.match.params.id;
    // }, )


    const handleChanges = e => {
        setMovie({
            ...movie,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        axios
            .put(`http://localhost:5000/api/movies/${movie.id}`)
            .then(res => console.log(res))
            .catch(err => console.log(err.response))
    }

    return(
        <div>
            <h2>Update Movie</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='title'
                    placeholder='Title'
                    onChange={handleChanges}
                    value={movie.title}
                />
                <input
                    type='text'
                    name='director'
                    placeholder='Director'
                    onChange={handleChanges}
                    value={movie.director}
                />
                <input
                    type='number'
                    name='metascore'
                    placeholder='Metascore'
                    onChange={handleChanges}
                    value={movie.metascore}
                />
                <input
                    type='text'
                    name='stars'
                    placeholder='Stars'
                    onChange={handleChanges}
                    value={movie.stars}
                />
                <button>Update</button>
            </form>
        </div>
    )
}

export default UpdateMovie;