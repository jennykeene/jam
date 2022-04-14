import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { HttpLink } from '@apollo/client';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Preview from './pages/Preview';
import Calculator from './pages/Calculator';
import News from './pages/News';
import NoMatch from './pages/NoMatch';

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

const router = [
    { path: "/", key: "general", category: "general", country: "us" },
    { path: "/general", key: "general", category: "general", country: "us" },
    { path: "/business", key: "business", category: "business", country: "us" },
    { path: "/sports", key: "sports", category: "sports", country: "us" },
    { path: "/entertainment", key: "entertainment", category: "entertainment", country: "us" },
    { path: "/technology", key: "technology", category: "technology", country: "us" }
]

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
              <Route path ='/news' element={<News />} />
              <Route element={<NoMatch />} />
              <Route>
                {
                  router.map(path =>
                    <Route
                      path={path.path}
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
