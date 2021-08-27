import React from 'react';

const CardList = ({profiles}) => (
    <div>
        {profiles.map(profile => <Card key={profile.id} {...profile}/>)}
    </div>
);

class Card extends React.Component {
    render() {
        const profile = this.props;
        return(
            <div className="github-profile">
                <img src={profile.avatar_url} />
                <div className="info">
                    <div className="name" style={{fontSize: '150%'}}>{profile.name}</div>
                    <div className="company">{profile.company}</div>
                </div>
            </div>
        );
    }
}

export default CardList;



