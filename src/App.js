import './App.css';
import Upload from './components/Upload'
function App() {
  return (
    <div className="App">
      <header className="App__header">
        <h1>tuchukk</h1> 
      </header>
      <h2 className= "App__sectionName" >Your Pictures</h2>
      <main className= "App__container">
        <Upload/>
      </main>
    </div>
  );
}

export default App;
