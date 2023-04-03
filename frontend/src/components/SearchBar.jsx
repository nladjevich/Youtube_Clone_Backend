import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function SearchBar() {
    const [input, setInput] = useState();
    const navigate = useNavigate();
    

    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/searched/' + input)
    };

  return (
    <form onSubmit={submitHandler}>
        <div>
            <input onChange={(e) => setInput(e.target.value)} type="text" value={input} />
        </div>
    </form>
    
  )
};

export default SearchBar


