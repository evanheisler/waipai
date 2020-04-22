import React from 'react';
import { useQuery, gql } from '@apollo/client';

import './App.scss';

const POSTS = gql`
  {
    posts {
      author_id
      content
    }
  }
`;

const App = () => {
  const { loading, error, data } = useQuery(POSTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.posts.map(post => `Post: ${post.content}`);
};

export default App;
