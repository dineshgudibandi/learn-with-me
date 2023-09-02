import React, { useState, useEffect } from 'react';
import './Menu.css';

const Menu = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
  
    const jsonFile = `jsons/nav.json`;
    fetch(jsonFile)
    .then(response => response.json())
    .then(data => { setData(data); })
    .catch(error => console.error('Error fetching JSON:', error));

  }, []);
  return (
        <nav>
        <div class="navbar">
          <div class="container nav-container">
              <input class="checkbox" type="checkbox" name="" id="" />
              <div class="hamburger-lines">
                <span class="line line1"></span>
                <span class="line line2"></span>
                <span class="line line3"></span>
              </div>  
            <div class="logo">
              <h1>Tiny Scholars</h1>
            </div>
            <div class="menu-items">
            { data.length > 0 && 
            data.map(item => (
          <li key={item.id}> <a href={`?id=${item.slug}`}>{item.name}</a></li>
        ))
           }
            </div>
          </div>
        </div>
      </nav>
  );
};

export default Menu;