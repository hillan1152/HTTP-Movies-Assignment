import React, { useState, useEffect } from 'react';
import axios from 'axios'

const initialItem = {
    title:'',
    director: '',
    metascore: 0,
    stars: ''
}

const MovieForm = (props) => {
    const [input, setInput] = useState(initialItem);
    
    // console.log('Movie Form Pros', props)
   useEffect(() => {
       const itemToEdit = props.savedList.find(
           movie => `${movie.id}` === props.match.params.id
       )
       if(itemToEdit) setInput(itemToEdit);
   }, [props.savedList, props.match.params.id])


    const handleChange = e => {
        e.persist();
        setInput({
            ...input,
            [e.target.name]:e.target.value
        })
    }

    const updateSubmit = e => {
        e.preventDefault();
        axios.put(`http://localhost:5000/api/movies/${input.id}`, input)
            .then(res => console.log('This is submit', res))
            .catch(err => console.log(err.response))
    }

    
    return(
        <div className="formDiv">
            <form onSubmit={updateSubmit}>
                <input
                    type="text"
                    name="title"
                    onChange={handleChange}
                    placeholder="Title"
                    value={input.title}
                />
                <input
                    type="text"
                    name="director"
                    onChange={handleChange}
                    placeholder="Director"
                    value={input.director}
                />
                <input
                    type="number"
                    name="metascore"
                    onChange={handleChange}
                    placeholder="Metascore"
                    value={input.metascore}
                />
                <input
                    type="text"
                    name="stars"
                    onChange={handleChange}
                    placeholder="Stars"
                    value={input.stars}
                />
                <button>Update Form</button>
            </form>
        </div>
    )
} 

export default MovieForm;