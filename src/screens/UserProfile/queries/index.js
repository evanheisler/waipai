import { gql } from '@apollo/client';

const CREATE_POST = gql`
  mutation CreatePost($content: String!, $title: String) {
    insert_posts(objects: { content: $content, title: $title }) {
      affected_rows
    }
  }
`;

const GET_USER_POSTS = gql`
  query GetPosts($authorId: String!) {
    posts(
      where: { author_id: { _eq: $authorId } }
      order_by: { updated_at: desc }
    ) {
      title
      content
      is_public
      created_at
      post_id
    }
  }
`;

export { CREATE_POST, GET_USER_POSTS };
