import React from 'react';
import CardList from './card';
import Form from './form';

import './index.css';

// const testData = [
//     { name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "Facebook"},
//     { name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Facebook"},
//     { name: "Sebastian Markbage", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"}
// ];

class App extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         profiles: testData
    //     };
    // }
    state = {
        profiles: []//testData
    };

    addProfile = (profile) => {
        this.setState(prevState => ({
            profiles: [...prevState.profiles, profile]
        }));
    };
    render(){
        return (
            <>
            <div className="header">{this.props.title}</div>
            <Form onSubmit={this.addProfile} />
            <CardList profiles={this.state.profiles} />
            </>
        );
    }
}

export default App;