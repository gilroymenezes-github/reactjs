import React from 'react';
import ReactDOM from 'react-dom';
import { IPost } from '../types/index'

let counter: number = 0;

function index() {
    const Post = ({ id, title, body }: IPost) =>
        <aside>

            <h2>{title}</h2>
            <p>
                {body}
            </p>

        </aside>

    return (
        <div>
            <Post id={++counter} title="Welcome.." body="To the machine .. " />
        </div>
    );
};

export default index;



