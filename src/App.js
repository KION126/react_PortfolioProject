import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './index.css';
import Main from './page/MainPage'
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <Router>
        <Routes>
          <Route 
            path="/" 
            element={<Main />} />
        </Routes>
      </Router>
    </RecoilRoot>
  );
}

export default App;
