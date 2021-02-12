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
const el = <Post id={++counter} title="About" body="What about?" />

export default class AboutPage extends React.Component<IPost> {

    render() {
        return el
    }
}
