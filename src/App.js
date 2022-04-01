
import './App.css';
import {HomePage} from '../src/Home/Home';
import {Header} from '../src/Header/Header'
import { BrowserRouter as Router } from 'react-router-dom';
import {Footer} from './Footer/Footer'
function App() {
  return (
    <Router>
      <Header/>
      <HomePage />
      <Footer />
    </Router>
  );
}

export default App;
