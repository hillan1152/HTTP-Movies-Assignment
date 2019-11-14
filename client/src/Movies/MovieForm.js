import React, { useState, useEffect } from 'react';


const initialItem = {
    title:'',
    director: '',
    metascore: undefined,
    stars: []
}

const MovieForm = (props) => {
    [input, setInput] = useState(intialItem);
    
    
    return(
        <div className="formDiv">
            <form>
                <input
                    name="title"
                    
                />
            
            </form>
        </div>
    )
} 

export default MovieForm;