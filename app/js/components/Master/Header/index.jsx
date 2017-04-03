import React, { Component } from 'react';
import { Link }from 'react-router-dom';
import Styles from './Header.scss';

/**
 *
 * @type {[*]}
 */
const links =
[
    { text: "Home", to: "/",     class: "menu-item" },
    { text: "Test", to: "test",  class: "menu-item" },
    { text: "Users", to: "users",  class: "menu-item" }
];

export default class Header extends Component
{
    /**************************/
    render() {
        return (
            <header className="header">
                {
                    links.map((link, i) => (
                        <Link key={i}
                              to={link.to}
                              className={Styles[link.class]}>
                            {link.text}
                        </Link>
                    ))
                }
            </header>
        );
    }
};