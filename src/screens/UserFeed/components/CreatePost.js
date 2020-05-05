import React from 'react';
import PropTypes from 'prop-types';
import { useMutation } from '@apollo/client';
import { CREATE_POST } from '../queries';

const CreatePost = ({ refresh }) => {
  let input;
  const [createPost] = useMutation(CREATE_POST, {
    onCompleted: refresh,
  });

  const handleCreateAndRefetch = e => {
    e.preventDefault();
    createPost({ variables: { content: input.value, title: 'Test' } });
    input.value = '';
  };

  return (
    <div>
      <form>
        <input
          ref={node => {
            input = node;
          }}
        />
        <button onClick={handleCreateAndRefetch}>Add Todo</button>
      </form>
    </div>
  );
};

CreatePost.propTypes = {
  refresh: PropTypes.func,
};

export default CreatePost;
