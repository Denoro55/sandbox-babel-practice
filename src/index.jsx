import React from 'react';
import ReactDOM from 'react-dom'

import bg from './bg.jpg';
import css from './css/style.scss';

console.log('kek');

const root = document.getElementById('root');

const App = () => {
    return (
        <div>
            <h1>Hello world 3</h1>
            <img src={bg} alt=""/>
        </div>
    )
};

ReactDOM.render(<App />, root);
