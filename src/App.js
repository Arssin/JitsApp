import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { PageLayout } from './PageLayout/Pagelayout';

function App() {
  return (
    <Router>
      <PageLayout />
    </Router>
  );
}

export default App;
