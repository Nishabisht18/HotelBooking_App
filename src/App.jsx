import React from 'react'
import Navbar from './components/Navbar'
import { HashRouter, Route, Routes, useLocation } from 'react-router-dom'
import Home from './components/Pages/Home';
import Footer from './components/Footer';
import AllRooms from './components/Pages/AllRooms';
import RoomDetails from './components/Pages/RoomDetails';
import MyBooking from './components/Pages/MyBooking';
import HotelReg from './components/HotelReg';
import Layout from './components/Pages/HotelOwner/Layout';
import Dashboard from './components/Pages/HotelOwner/Dashboard';
import AddRoom from './components/Pages/HotelOwner/AddRoom';
import ListRoom from './components/Pages/HotelOwner/ListRoom';

const App = () => {
    const isOwnerPath=useLocation().pathname.includes("owner");
  return (
    <div>
        {!isOwnerPath && <Navbar/>}
        
        {false && <HotelReg/>}
        <div className='min-h-[70vh]'>
          <HashRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/rooms' element={<AllRooms/>}/>
            <Route path='/rooms/:id' element={<RoomDetails/>}/>
            <Route path='/my-bookings' element={<MyBooking/>}/>
            <Route path='/owner' element={<Layout/>}>
              <Route index element={<Dashboard/>}/>  
              <Route path='list-room' element={<ListRoom/>}/>  
              <Route path='add-room' element={<AddRoom/>}/>              
            </Route>
          </Routes>
          </HashRouter>
        </div>
        <Footer/>
    </div>
  )
}

export default App