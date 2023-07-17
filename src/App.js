import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Donor from './components/Donor';
import Search from './components/Search';
import EditDonor from './components/EditDonor';
import About from './components/About';
import Activities from './components/Activities';
import Guideline from './components/Guideline';
import Admin from './components/Admin';
import AdminDashboard from './components/AdminDashboard';









function App() {
  return (
    <div className="App">


      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/donor/:id' element={<Donor />}></Route>
        <Route path='search/:id/:name' element={<Search />}></Route>
        <Route path='edit/:id' element={<EditDonor />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/activities' element={<Activities />}></Route>
        <Route path='guideline' element={<Guideline />}></Route>
        <Route path='admin' element={<Admin />}></Route>
        <Route path='adminDash' element={<AdminDashboard />}></Route>

      </Routes>


    </div>
  );
}

export default App;
