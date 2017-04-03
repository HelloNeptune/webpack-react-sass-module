import React, { Component } from 'react';
import Pages from '../../Pages'
import Routes from '../../Routes/router'
import { BrowserRouter as Router,
         Route } from 'react-router-dom';

import Styles from './Content.scss';

export default class Content extends Component
{
    /**************************/
    render() {
        return (
            <main className="content">
                <Routes />
            </main>
        );
    }
};