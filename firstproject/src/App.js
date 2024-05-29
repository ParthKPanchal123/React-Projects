import React from 'react'
import { Route, Routes } from 'react-router-dom';
// import Home from './Boostrap/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Crud With Routing/Home';
import Login from './Crud With Routing/Login';
// import Counter from './REDUX/Counter';
// import Home from './Crud With Routing/Home';
// import Login from './Crud With Routing/Login';
// import { Navbar } from 'react-bootstrap';
import User from './Crud With Routing/User';
// import SessionStorage from './CruiedOperation/SessionStorage'

// import EventHandling from './Event/EventHandling'
// import ConceptArray from './ConceptArray/ConceptArray'
// import Header from './Counter/Header'
// import Footer from './Counter/Footer'
// import Sidebar from './Counter/Sidebar'
// import Content from './Counter/Content'
// import Comment from './FormHandling/Comment'
// import FormControl from './FormHandling/FormControl'
// import FormUncontrol from './FormHandling/FormUncontrol'
// import Cruied from './CruiedOperation/Cruied.jsx'

export default function App() {
  return (
    <>
      {/* <EventHandling /> */}
      {/* <ConceptArray/> */}

      {/* <Header/>
      <Sidebar/>
      <Content/>
      <Footer/> */}

      {/* <Comment/>
      <FormControl/>
      <FormUncontrol/> */}
      {/* <Cruied/> */}
      {/* <Home/> */}
      {/* <SessionStorage/> */}
      {/* <Counter /> */}
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/User" element={<User/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </>
  )
}
