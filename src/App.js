import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Routes from './routes/Router';
import { Provider } from 'react-redux'
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes/>
      </Router>
    </Provider>
  );
}

export default App;