import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet'
import Welcum from './Components/Welcome'

const TgApp = window.Telegram.WebApp;

function App() {
  return (
    <div className="App">
	  <Greet name="Maxxxxxxxxxx" age="5" awesomeness="ultimate">
	  <button>Dont boop me🥺</button>
	  </Greet>
	  <Welcum />
    </div>
  );
}

export default App;
