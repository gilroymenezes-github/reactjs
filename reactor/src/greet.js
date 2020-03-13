import React from 'react';

let name = function(firstname, lastname) {
    return { "firstname": firstname, "lastname": lastname};
}

const Hi = (name) => <div>Hi {name.firstname} { name.lastname}</div>;

export default Hi