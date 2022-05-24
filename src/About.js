import logo from './logo.svg';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import React from 'react';
import Card from './Card';
import Head from './Head';



class About extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
          <h1>about</h1>
      </div>
    );
  }
  
}
export default About;
