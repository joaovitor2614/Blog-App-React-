import React from 'react';

import PostList from './PostList'
import PostFilter from './PostFilter'
import PostSummary from './PostSummary'

const DashboardPage = () => (
  <div>
    <PostSummary />
    <PostFilter />

    <PostList />
  </div>
);

export default DashboardPage;
