import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Product from "./Product/Product";
import Music from "./Music/Music";
import Top from "./Top";
import Head from './Head';

//参考サイト
//https://www.sukerou.com/2022/03/github-pages-react.html

function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <Head/>
        <div className='container-fluid my_main'>
          <Routes>
            <Route path={`${process.env.PUBLIC_URL}/`} element={<Top />} />
            <Route path={`${process.env.PUBLIC_URL}/product`} element={<Product />} />
            <Route path={`${process.env.PUBLIC_URL}/music`} element={<Music />} />
          </Routes>
        </div>

      </BrowserRouter>

    </div>
  );
}

export default App;
