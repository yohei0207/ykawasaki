import * as React from 'react';
import {Link} from "react-router-dom";

//const pages = ['Products', 'Pricing', 'Blog'];


const pages = [
  { title: "Product", to: "/product" },
  { title: "Music", to: "/music" },

];

class Head extends React.Component {
  render() {
    return (

      <nav class="navbar navbar-expand-lg navbar-light my-bg">
        
        <Link class = "navbar-brand" to = {`${process.env.PUBLIC_URL}`} ><span class = "my-name">Yohei Kawasaki</span></Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">

            {pages.map((page) => {
              return (
                <li className='nav-item'>
                    
                  <Link class="nav-link" to ={`${process.env.PUBLIC_URL}` + `${page.to}`}>{page.title}</Link>
                </li>
              );
            })}
            
          </ul>
        </div>
      </nav>

    );
  }
}

export default Head;