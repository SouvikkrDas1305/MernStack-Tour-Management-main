import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import Home from './../pages/Home';
import Tours from './../pages/Tours';
import TourDetails from '../pages/TourDetails';
import Login from './../pages/Login';
import Register from './../pages/Register';
import SerarchResultList from './../pages/SearchResultList';

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to= '/home' />}/>
        <Route path= '/home' element= {<Home/>} />
        <Route path= '/tour' element= {<Tours/>} />
        <Route path= '/tour/:id' element= {<TourDetails/>} />
        <Route path= '/login' element= {<Login/>} />
        <Route path= '/regisrer' element= {<Register/>} />
        <Route path= '/tour/search' element= {<SerarchResultList/>} />
    </Routes>
  )
}

export default Routers