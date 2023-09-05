import React from 'react'
import {BrowserRouter} from "react-router-dom"
import RouteCompo from './Components/RouteCompo';
import LinkCompo from './Components/LinkCompo';
import './App.css';



function App(){
  return(
    <BrowserRouter>
    <LinkCompo/>
    <RouteCompo/>
    </BrowserRouter>
  )
}
export default App;