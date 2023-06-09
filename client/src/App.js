import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Login from './components/login/Login';
import Navbar from './components/navbar/Navbar';
import Signup from './components/signup/Signup';
import Contribution from './pages/Contribution';
import Home from './pages/Home';
import DataProvider from './context/DataProvider';
import InterviewData from './pages/InterviewData';
import Footer from './components/footer/Footer';
import Navbar2 from './components/navbar/Navbar2';

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Navbar2/>
        {/* <Navbar/> */}
        <Routes>
          <Route path='signup' element={<Signup/>}/>
          <Route path='login' element={<Login/>}/>
           
          <Route path='/' element={<Home/>}/> 
          <Route path='/contribute' element={<Contribution/>}/>
          <Route path='/details' element={<InterviewData/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
