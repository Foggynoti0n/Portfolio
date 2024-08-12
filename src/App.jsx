import React, { useEffect, useState  } from 'react';
import { BrowserRouter } from 'react-router-dom';
import axios from  'axios'
import { Route, Routes, useLocation } from 'react-router-dom';
import  Home  from './coponents/Home/Home';
import Nav from './coponents/Nav/Nav'
import Projects from './coponents/Projects/Projects'
import './App.css';





function App() {
  const [shouldShowNavbar, setShouldShowNavbar] = useState(true); 




  return (
    <>

    {/* <Nav/> */}
<BrowserRouter>
<Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
</BrowserRouter>
    </>
  );
}

export default App;