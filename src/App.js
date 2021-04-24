
import React, { useState } from 'react';
import "./App.css"
import ImageGrid from './components/ImageGrid';
import Modal from './components/Modal';
import Upload from './components/Upload';


function App() {
  const[selectedImg, setSelectedImg] = useState(null);
  return (
    <div className="App">
      <header> 
        <span className = "App__logoContainer">
        <h1 className = "App__logo">tuchukk</h1> 
        </span>
      </header>
          
          <Upload/>
          {selectedImg && <Modal selectedImg = {selectedImg} setSelectedImg={setSelectedImg}  />}
          <ImageGrid setSelectedImg={setSelectedImg}/>

    </div>
  );
}

export default App;
