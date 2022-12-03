
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Contato from './pages/Contato';
import Empresa from './pages/Empresa';
import Home from './pages/Home';


function App() {

  return (
    <div className="App">
      <Router>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/empresa">Empresa</Link></li>
          <li><Link to="/contato">Contato</Link></li>
        </ul>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/empresa' element={<Empresa />} />
          <Route path='/contato' element={<Contato />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
