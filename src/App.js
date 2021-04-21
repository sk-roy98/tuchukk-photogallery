import './App.css';
import Upload from './components/Upload'
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
        </main>
      </div>
    </div>
  );
}

export default App;
