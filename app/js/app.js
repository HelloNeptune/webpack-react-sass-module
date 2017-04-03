import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './components/Routes';
/**
 * @type: HTMLElement
 */
const Container = document.getElementById( 'app' );

// Render application
// #
ReactDOM.render( <Routes />, Container );