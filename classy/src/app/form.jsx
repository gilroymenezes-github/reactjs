import axios from "axios";
import React, { useState } from "react";

const Form = (props) => {

    const [userName, setUserName] = useState('');

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        const response = await axios.get(`https://api.github.com/users/${userName}`);
        props.onSubmit(response.data);
        setUserName('');
    };

    const handleChange = evt => setUserName(evt.target.value);
    
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" 
                value={userName} 
                onChange={handleChange}
                placeholder="Github Username" required />
            <button>Add card</button>
        </form>
    );
}

export default Form;