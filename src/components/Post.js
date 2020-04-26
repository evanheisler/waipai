import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const Post = ({ title, created_at, content, is_public }) => {
  return (
    <div>
      {title}
      <br />
      {moment(created_at).format('MMM DD, YYYY')}
      <br />
      {content}
      <br />
      {is_public}
    </div>
  );
};

Post.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string.isRequired,
  is_public: PropTypes.bool,
};

export default Post;
