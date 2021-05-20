
import './App.css';
import background from "./img/background.jpg";
import Home from './components/Home'



function App() {
  return (
    <div className="App" style={{
      backgroundImage: `url(${background})`,
      backgroundRepeat: 'no-repeat',
      height: '100%',
      width: '100%',
    }}>

      <Home />
    </div>
  );
}

export default App;
