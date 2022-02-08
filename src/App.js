
import './App.css';
import Header from './components/Header/header';
import Section from './components/Section/section';
import Footer from './components/Footer/footer';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import Services from './components/Pages/Services';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="container-fluid">
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<><Header/> <Section/></>}>
          <Route index element={<Home/>}/>
          <Route path='home' element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='services' element={<Services/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path="*" element={<h1>No page</h1>} />
        </Route>
      </Routes>
      </BrowserRouter>
      
      <Footer/>
      </div>
  
  );
}

export default App;
