import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Contact from './pages/Contact';
import {Routes, Route} from "react-router-dom";
import Davbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      
<Davbar />
   
    <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='/about' element={<About />}></Route>
    <Route path='/service' element={<Service />}></Route>
    <Route path='/contact' element={<Contact />}></Route>
    </Routes>
    </div>
  );
}

export default App;
