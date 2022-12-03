import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import Contato from './pages/Contato';
import Empresa from './pages/Empresa';
import Home from './pages/Home';


function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/empresa' element={<Empresa />} />
          <Route path='/contato' element={<Contato />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
