import React from 'react';
import { gql, useQuery } from '@apollo/client';

const POSTS = gql`
  {
    posts {
      author_id
      content
    }
  }
`;

const Posts = () => {
  const { loading, error, data } = useQuery(POSTS);
  if (loading) return <p>Loading data...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div> {!error && data.posts.map(post => `Post: ${post.content}`)}</div>
  );
};

Posts.propTypes = {};

export default Posts;
