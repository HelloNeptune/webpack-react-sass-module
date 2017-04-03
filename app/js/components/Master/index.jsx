import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import Styles from './Master.scss';

export default class Master extends Component
{
    render() {
        return (
            <div id="app">
                <Header />
                <Content />
                <Footer />
            </div>
        );
    }
};