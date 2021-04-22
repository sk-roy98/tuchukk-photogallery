import './App.css';
import ImageGrid from './components/ImageGrid';
import Modal from './components/Modal';
import Upload from './components/Upload';
import Modal from './components/Modal';

function App() {
  return (
    <div className="App">
      <header>
        <h1 className = "App__logo">tuchukk</h1> 
      </header>
      <div className = "App__container">
        <h2 className= "App__sectionName" >Your Pictures</h2>
        <main>
          <Upload/>
          <ImageGrid/>
          <Modal/>
        </main>
      </div>
    </div>
  );
}

export default App;
