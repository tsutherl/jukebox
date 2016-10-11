'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const Main = require('./Main');


 /* In Main.js
            we are adding a data property to the Album child and we can access the Parent's state.fakeAlbum property via this.props.data in the Album component
            */



ReactDOM.render(
    <Main />,
    document.getElementById('app')
);

