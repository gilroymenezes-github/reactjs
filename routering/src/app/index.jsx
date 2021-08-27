import React, { useState } from 'react';
import CardList from './card';
import Form from './form';

import './index.css';

const testData = [
    { id: 1, name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "Facebook"},
    { id: 2, name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Facebook"},
    { id: 3, name: "Sebastian Markbage", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"}
];

const App = ({title}) => {
    const [profiles, setProfiles] = useState([]); //useState(testData);

    const addProfile = (profile) => {
        let updatedProfiles = [...profiles, profile];
        setProfiles(updatedProfiles);
    };

    return (
            <>
            <div className="header">{title}</div>
            <Form onSubmit={addProfile} />
            <CardList profiles={profiles} />
            </>
        );
}

export default App;