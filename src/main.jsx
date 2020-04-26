import React from 'react';
import ReactDOM from 'react-dom'

const root = document.getElementById('root');

const App = () => {
    return (
        <span>Hello world</span>
    )
};

ReactDOM.render(<App />, root);

// class App {
//     getName = () => {
//         return '10'
//     };
//
//     run() {
//         const name = 'World';
//         console.log(`Hello ${name}`);
//
//         const arr2 = [1, 2, [3, 4, [5, 6]]];
//         arr2.flat();
//
//         console.log(arr2);
//     }
// }
//
// const app = new App();
// app.run();
//
// async function as2() {
//     return 1;
// }
//
// async function as() {
//     const num = await as2();
//     console.log(num);
// }
//
// as();
