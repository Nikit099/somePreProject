import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import Navbar from './Router/Navbar';
import Routers from './Router/Routers';
import 'bootstrap/dist/css/bootstrap.css'


function App() {
   
    return ( 
        <BrowserRouter>
         <Navbar/>
         <Routers/>
        </BrowserRouter>
      
    );
}

export default App;