import axios from "axios";
import React from "react";

class Form extends React.Component {
    state = { userName: '' };
    handleSubmit = async (evt) => {
        evt.preventDefault();
        const response = await axios.get(`https://api.github.com/users/${this.state.userName}`)
        this.props.onSubmit(response.data);
        this.setState({ userName: ''});
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" 
                    value={this.state.userName} 
                    onChange={evt => this.setState({ userName: evt.target.value})}
                    placeholder="Github Username" required />
                <button>Add card</button>
            </form>
        );
    }
}

export default Form;