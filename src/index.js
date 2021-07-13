import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {ApolloClient, InMemoryCache, ApolloProvider} from "@apollo/client";

import {Provider} from "react-redux";
import {createStore} from "redux";
import reducer from "./redux/reducer";


const client = new ApolloClient({
  uri: 'https://www.allsports.by/graphql',
  cache: new InMemoryCache()
});
const store = createStore(reducer);


ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <App/>
      </Provider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
