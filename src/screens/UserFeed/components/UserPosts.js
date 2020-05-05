import React from 'react';
import { useAuth0 } from 'hooks/react-auth0-spa';
import { useQuery } from '@apollo/client';
import { GET_USER_POSTS } from '../queries';
import CreatePost from './CreatePost';
import Post from 'components/Post';

const Posts = () => {
  const { user } = useAuth0();
  const { loading, error, data, refetch, networkStatus } = useQuery(
    GET_USER_POSTS,
    {
      variables: {
        authorId: user.sub,
      },
      notifyOnNetworkStatusChange: true,
      fetchPolicy: 'cache-and-network',
    }
  );

  if (networkStatus === 4) return 'Refetching!';
  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>Could not retrieve posts</p>;

  return (
    <div>
      <CreatePost refresh={() => refetch()} />{' '}
      {data.posts.map(post => (
        <Post key={post.post_id} {...post} />
      ))}
    </div>
  );
};

Posts.propTypes = {};

export default Posts;
