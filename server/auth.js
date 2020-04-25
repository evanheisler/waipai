/* eslint-disable */
var auth0InsertUser = function (user, context, callback) {
  const admin_secret = '';
  const url = 'https://something.ngrok.io/v1/graphql';

  const userId = user.user_id;
  const userName = user.nickname;
  const fname = user.name;
  const email = user.email;

  const mutation = `
    mutation($userId: String!, $userName: String, $fname: String!, $email: String!) {
      insert_users(
      objects: [{ id: $userId, full_name: $fname, user_name: $userName, email: $email }]
      on_conflict: {constraint: users_pkey, update_columns: created_at}
    ) {
      affected_rows
    }
  }`;

  request.post(
    {
      headers: {
        'content-type': 'application/json',
        'x-hasura-admin-secret': admin_secret,
      },
      url: url,
      body: JSON.stringify({
        query: mutation,
        variables: { userId, userName, fname, email },
      }),
    },
    function (error, response, body) {
      console.log(body);
      callback(null, user, context);
    }
  );
};

var auth0JwtClaim = function (user, context, callback) {
  const namespace = 'https://hasura.io/jwt/claims';
  context.accessToken[namespace] = {
    'x-hasura-default-role': 'user',
    // do some custom logic to decide allowed roles
    'x-hasura-allowed-roles': ['user'],
    'x-hasura-user-id': user.user_id,
  };
  callback(null, user, context);
};
