import React from 'react';
import { useQuery, gql } from '@apollo/client';

import './App.scss';

const EXCHANGE_RATES = gql`
  {
    worlds {
      name
      population
    }
  }
`;

const App = () => {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.worlds.map(world => `World: ${world.name}`);
};

export default App;
