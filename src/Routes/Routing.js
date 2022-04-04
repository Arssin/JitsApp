import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PageLayout } from '../PageLayout/Pagelayout';
import { MenuLayout } from '../Menu/MenuLayout';

export function Routing() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<PageLayout />} />
        <Route exact path="/menu" element={<MenuLayout />} />
      </Routes>
    </Router>
  );
}
