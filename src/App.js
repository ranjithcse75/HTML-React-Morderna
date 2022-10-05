
import './App.css';
import Home from './Pages/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import NoPage from './Pages/NoPage';
import Services from './Pages/Services';
import Team from './Pages/Team';
import Portfolio from './Pages/Portfolio';

function App() {
  return (
    <div className="App">      
    <Header/>
                <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />             
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/services" element={<Services />} />
                <Route path="/team" element={<Team />} />



                <Route path="*" element={<NoPage />} />
            </Routes>
            <Footer/>
    </div>
  );
}

export default App;
