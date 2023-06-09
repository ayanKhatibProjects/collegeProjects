import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import VideoCourse from './components/VideoCourse';
import Faqs from './components/Faqs';
import Team from './components/Team';
import Services from './components/Services';
import ContactUs from './components/ContactUs';
import SignUp from './components/SignUp';
import Certificate from './components/Certificate';



export default class App extends Component {
  render() {
    return (
      <>
      <Routes>

      <Route path='/' element={<SignUp/>}/>
      <Route path='/home' element={<Home  />}/>
      
        
        
          
        
        <Route  exact  path='/videoCourse' element={<VideoCourse/>} />
        <Route exact path='/faqs' element={<Faqs/>}/>
        <Route exact path='/team' element={<Team/>} />
        <Route exact path='/services' element={<Services/>} />
        <Route exact path='/ContactUs' element={<ContactUs/>} />
        <Route path='/certificate' element={<Certificate  />}/>

        

        </Routes>

     
      </>
    )
  }
}
