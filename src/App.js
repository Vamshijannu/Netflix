import Home from './components/Home';
import './app.scss';

import {BrowserRouter as Router,Routes,Route } from "react-router-dom" 


function App() {
  return ( <Router>
    <Routes>
      <Route path='/' element={<Home />}/>
      

    </Routes>
  </Router>
    
  );
}

export default App;
