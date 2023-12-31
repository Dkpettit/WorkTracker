import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Head  from "./components/Head";
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Project from './pages/Project.jsx';


const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming){
            return incoming;
          }
        },
        projects: {
          merge(existing, incoming){
            return incoming;
          }
        }
      }
    }
  }
})

const client = new ApolloClient({
  uri: 'https://dave-pettit-work-tracker.onrender.com/graphql',
  cache,
});


function App() {
  return (
    <>
    <ApolloProvider client={client}>
      <Router>
      <Head />
        <div className="container">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/projects/:id' element={<Project />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </Router>      
    </ApolloProvider>    
    </>
    
  );
}

export default App;
