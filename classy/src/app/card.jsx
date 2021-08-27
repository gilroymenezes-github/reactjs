import React from 'react';

const CardList = (props) => {
    return (
    <div>
        {props.profiles.map(p => <Card key={p.id} {...p}/>)}
    </div>
    );
}

const Card = (props) => {
    return(
        <div className="github-profile">
        <img src={props.avatar_url} />
        <div className="info">
            <div className="name" style={{fontSize: '150%'}}>{props.name}</div>
            <div className="company">{props.company}</div>
        </div>
    </div>
    )
}

export default CardList;



