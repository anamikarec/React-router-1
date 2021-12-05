import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

import Navbar from "./Components/Navbar";
import AllRoutes from "./Routes/AllRoutes";

function App() {
  return (
    <div style={{textAlign: 'center'}}>
   <BrowserRouter>
      <Navbar />
      <AllRoutes/>
   </BrowserRouter>
   </div>
  )
}

export default App