import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { HttpLink } from '@apollo/client';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import NoMatch from './pages/NoMatch';
import Dashboard from './pages/Dashboard';
import Preview from './pages/Preview';
import Calculator from './pages/Calculator';
<<<<<<< HEAD
import Workouts from './pages/Workouts';
=======
import News from './pages/News';
>>>>>>> 658171f63a4646b99f69526085c4f1206589a9a2

const httpLink = new HttpLink({
  uri: "http://localhost:3001/graphql" || "/graphql",
  fetch: fetch
});
export const createLink = createHttpLink({
  uri: "http://localhost:3001/graphql" || "/graphql",
})
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
  cache: new InMemoryCache(),
  createLink,
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
              <Route path ='/calculator' element={<Calculator />} />
              <Route element={<NoMatch />} />

            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
