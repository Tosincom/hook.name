import React from 'react'
import MovieList from "./hooks/MovieList";
import {Routes,Route} from "react-router-dom"
import Description1 from './hooks/Description1';
import Description2 from './hooks/Description2';
import Description3 from './hooks/Description3';
function App() {


  return (
    <div>

     <Routes>
      <Route path= "/" element={<MovieList/>}/>
      <Route path='/description1' element={<Description1/>}/>
      <Route path = "/description2" element={<Description2/>}/>
      <Route path='/description3' element={<Description3/>}/>
     </Routes>
      
    </div>
  );
}

export default App;
