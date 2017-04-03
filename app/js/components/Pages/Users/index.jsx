import React, { Component } from 'react';
import Styles from './Users.scss';

export default class Users extends Component {

    /**
     *
     * @param props
     * @param context
     */
    constructor( props, context )
    {
        super( props, context );

        /**
         *
         * @type {Array}
         */
        this.state = {
            users: []
        }
    }

    componentDidMount()
    {
        var _this = this;

        // fetch data
        // #
        $.get( 'https://jsonplaceholder.typicode.com/posts/1/comments' ).then( ( res ) =>
        {
            _this.setState({ users: res });
        });
    }


    /**
     * [ fn ] --> render
     * @returns {XML}
     */
    render()
    {
        return (
            <ul>
                { this.state.users.map( ( user, index ) =>
                {
                    console.log(user);
                    return(
                        <li key={index}> {user.email} </li>
                    )
                })}
            </ul>
        )
    }
}