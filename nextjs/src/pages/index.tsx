import React from 'react';
import { IPost } from '../types/index'

export const Post = ({ id, title, body }: IPost) => 
<aside>
    
    <h2>{title}</h2>
    <p>
        { body }
    </p>
    
</aside>

let counter: number = 0;

export default class IndexPage extends React.Component<IPost> {

    render() {
        return <Post id={++counter} title="Welcome!" body="To the machine" />
    }
}
