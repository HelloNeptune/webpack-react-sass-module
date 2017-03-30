import React, { Component } from 'react';
import Menu from '../../Global/Menu'
import styles from './Header.scss';

export default class Header extends Component
{
    /**************************/
    render() {
        return (
            <div className={styles.header}>
                <Menu />
            </div>
        );
    }
};