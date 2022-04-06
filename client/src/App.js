import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { HttpLink } from '@apollo/client';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import NoMatch from './pages/NoMatch';
import Dashboard from './pages/Dashboard';
import Preview from './pages/Preview';
import Calculator from './pages/Calculator';

const httpLink = new HttpLink({
  uri: "http://localhost:3001/graphql" || "/graphql",
  fetch: fetch
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

// instantiate Apollo Client 
const client = new ApolloClient ({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

function App() {
  return (
    //enable aaplication to interact with Apollo Client instance 
    <ApolloProvider client={client}>
      <BrowserRouter>
        <div className='flex-column justify-flex-start min-100-vh'>
          <div className='container'> 
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/preview' element={<Preview />} />
              <Route path='/calculator' element={<Calculator />} />
              <Route element={<NoMatch />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
