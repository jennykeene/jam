import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { HttpLink } from '@apollo/client';
import { v4 as uuidv4 } from "uuid";
import { router } from "./utils/api";
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Preview from './pages/Preview';
import Calculator from './pages/Calculator';
import News from './pages/News';
import NoMatch from './pages/NoMatch';

const httpLink = new HttpLink({
  uri: "/graphql",
  fetch: fetch
});

export const createLink = createHttpLink({
  uri: "/graphql",
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
  const pageSize = 7;

  
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
              <Route>
                {
                  router.map(path =>
                    <Route
                      exact
                      key={uuidv4()}
                      path='/news'
                      element={
                        <News
                          key={path.key}
                          category={path.category}
                          pageSize={pageSize}
                          country={path.country}
                        />
                      }
                    />
                  )
                }
              </Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
