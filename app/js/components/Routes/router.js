import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Pages from '../Pages';

export default () =>
(
    <view>
        <Route exact path="/" component={ Pages.home } />
        <Route path="/test" component={ Pages.test } />
        <Route path="/users" component={ Pages.users } />
    </view>
);


