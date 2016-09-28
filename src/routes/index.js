
import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import  AboutUs  from './AboutUs/Components/AboutUs';
import  Help  from './Help/Components/Help';

// NOTE: here we're making use of the `resolve.root` configuration
// option in webpack, which allows us to specify import paths as if
// they were from the root of the ~/src directory. This makes it
// very easy to navigate to files regardless of how deeply nested
// your current file is.
import CoreLayout from 'layouts/CoreLayout/CoreLayout';
import { View } from './View.js';

export default (store) => (
  <Router history={hashHistory}>
    <Route path='/' component={CoreLayout}>
      <IndexRoute component={View} />
    </Route>
    <Route path="/AboutUs" component={CoreLayout}>
      <IndexRoute component={AboutUs}/>
    </Route>
    <Route path="/Help" component={CoreLayout}>
      <IndexRoute component={Help}/>
    </Route>
  </Router>
);
