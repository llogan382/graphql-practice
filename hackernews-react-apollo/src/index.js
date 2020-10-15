import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import App from './components/App'
import * as serviceWorker from './serviceWorker';

// 1
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'


// 2 what is connecting to my ApolloClient instance?
const httpLink = createHttpLink({
  uri: 'http://localhost:4000'
})

// 3 Instantiate ApolloClient by passing a link AND instance of InMemoryCache
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

// 4 Wrap the APP with ApolloProvider
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)
serviceWorker.unregister();