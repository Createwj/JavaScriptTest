import React from 'react';
import ReactDOM from 'react-dom';
// require('11.react-dom')
let hello = ReactDOM.render(
    <div>
        <h1>菜鸟教程 </h1>
        <h2>欢迎学习 React</h2>
        <p data-myattribute = "somevalue">这是一个很不错的 JavaScript 库!</p>
    </div>
    ,
    document.getElementById('root')
);
module.exports = hello;