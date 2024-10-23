import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './index.css';
import Main from './page/MainPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
