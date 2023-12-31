import React, { useState, useEffect } from 'react';
import './App.css';
import ImageGallery from "react-image-gallery";
import Menu from './Menu';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
   
    const queryParameters = new URLSearchParams(window.location.search);
    let id = queryParameters.get("id");
    if(id == null) {
      id="states";
    }
    const jsonFile = `jsons/${id}.json`;
    fetch(jsonFile)
    .then(response => response.json())
    .then(data => { setData(data); })
    .catch(error => console.error('Error fetching JSON:', error));

  }, []);
 
  return (
    <div className="App">
        <Menu />
       <ImageGallery items={data} />
        <div><a href='Privacy.html' target='_blank'>Privacy Policy</a></div>
    </div>
  );
}

export default App;
