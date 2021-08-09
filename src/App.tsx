import React from 'react';
import styled from 'styled-components';

/** Routing Components */
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

/** Import Pages Components */
import FirstScreen from './app/Pages/FirstPage';
import Categorias from './app/Pages/Categorias';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/"><FirstScreen /></Route>
        <Route path="/categories"><Categorias /></Route>  
      </Switch>
    </Router>
  );
}

export default App;