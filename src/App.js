import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './index.css';
import Main from './page/MainPage'
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <Router basename={process.env.PUBLIC_URL}>
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
