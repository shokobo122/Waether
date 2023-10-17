import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppWeather from './components/appWeather';

function App() {
  return (
    <BrowserRouter>
      <AppWeather />
    </BrowserRouter>
  );
}

export default App;
