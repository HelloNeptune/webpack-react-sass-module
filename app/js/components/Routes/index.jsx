import { BrowserRouter as Router, HashRouter, Route } from 'react-router-dom';
import React, { Component } from 'react';
import Master from '../Master';

export default () => (
    <HashRouter>
        <Route component={Master}></Route>
    </HashRouter>
);