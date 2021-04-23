import './App.css';
import React, { useState } from 'react';
import ImageGrid from './components/ImageGrid';
import Modal from './components/Modal';
import Upload from './components/Upload';

function App() {
  const[selectedImg, setSelectedImg] = useState(null);
  return (
    <div className="App">
      <header>
        <h1 className = "App__logo">tuchukk</h1> 
      </header>
      <div className = "App__container">
        <h2 className= "App__sectionName" >Your Pictures</h2>
        <main className="App">
          <Upload/>
          <ImageGrid setSelectedImg={setSelectedImg}/>
          {selectedImg && <Modal selectedImg = {selectedImg} setSelectedImg={setSelectedImg}  />}
        </main>
      </div>
    </div>
  );
}

export default App;
