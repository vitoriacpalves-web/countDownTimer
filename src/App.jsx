
import './App.css'
import { Outlet } from 'react-router-dom';
import React, { useContext } from 'react'

//context
import { CountDownContext } from './context/CountDownContext'


//img
import BackGroundHome from "./assets/backgroundHome.jpg"


function App() {

  const { event } = useContext(CountDownContext);

  let eventImage = null;

  if (event) eventImage = event.image;


  return (
    <div className="App" style={ eventImage
      ?
      { backgroundImage: `url(${eventImage})` }
      :
      { backgroundImage: `url(${BackGroundHome})` }}>

      <div className="container">

        <Outlet />
      </div>
    </div>
  );
}

export default App;
