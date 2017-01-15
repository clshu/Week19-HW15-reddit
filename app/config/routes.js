import React from 'react';
import { IndexRoute, Route, Router, hashHistory, browserHistory } from 'react-router';

import Main from '../components/Main';
import Listing from '../components/subreddit/Listing';
import Post from '../components/subreddit/Post';
import ShowPost from '../components/subreddit/ShowPost';

module.exports = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
			<Route path="/:subredditId" component={Listing} >
				<Route path="/:subredditId/new" component={Post} />
				<Route path="/:subredditId/:post_id" component={ShowPost} />
			
			</Route>
			<IndexRoute component={Listing} />
    </Route>
  </Router>
);
