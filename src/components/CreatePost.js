import React from 'react';
import { gql, useMutation } from '@apollo/client';

const CREATE_POST = gql`
  mutation CreatePost($content: String!, $title: String) {
    insert_posts(objects: { content: $content, title: $title }) {
      affected_rows
    }
  }
`;

const CreatePost = () => {
  let input;
  const [createPost] = useMutation(CREATE_POST);

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          createPost({ variables: { content: input.value, title: 'Test' } });
          input.value = '';
        }}>
        <input
          ref={node => {
            input = node;
          }}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default CreatePost;
