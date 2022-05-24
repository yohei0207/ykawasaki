import logo from './logo.svg';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import React from 'react';
import Card from './Card';
import Head from './Head';
import Skill from './Skill';
import About from './About';
import Top from './Top';
import Music from './Music_component/Music';
import Product from './Product_component/Product';
import Research from './Research';
import Foot from './Foot';



class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

      <BrowserRouter>
        <Head />
        <div className='container-fluid my_main'>
          <Routes>
            <Route path="/" element={<Top />} />
            <Route path="/product" element={<Product />} />
            <Route path="/skill" element={<Skill />} />
            <Route path="/music" element={<Music />} />
          </Routes>
        </div>
        <Foot />

      </BrowserRouter>



    );
  }

}
export default App;
