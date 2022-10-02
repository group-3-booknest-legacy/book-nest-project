import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// importing Navbar Link Components
import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from "./components/login"
import Home from './components/Home';
import WriteReview from './components/WriteReview';
import MyBooks from './components/MyBooks';
import Reviews from './components/Reviews';
import Favourites from './components/Favourites';
import WishList from './components/WishList';
import LogOut from './components/LogOut';

// importing components outside navbar
import Footer from './components/Footer';
import "../src/css/App.css";



function App() {
  return (

    // need the router component in order for the links to work
    <Router className = "container">
      <Navbar />

{/* all the links (each route) need to be wrapped in the Routes component in order to work */}
    <Routes className = "pageContainer">
      {/* declaring each route. The path needs to be the same as the to = "" in the Navbar Component */}
      <Route 
      path='/' element= {<Home />}>
      </Route>

      <Route 
      path='/register' element= {<Register />}>
      </Route>

      <Route 
      path='/login' element= {<Login />}>
      </Route>


      <Route 
      path='/review' element={<WriteReview />}> 
      </Route>

      <Route 
      path='/mybooks' element ={<MyBooks />}>  
      </Route>

      <Route 
      path='/reviews' element ={<Reviews />}>  
      </Route>

      <Route 
      path='/favourites' element ={<Favourites />}>  
      </Route>

      <Route 
      path='/wishlist' element ={<WishList />}>  
      </Route>

      <Route 
      path='/logout' element ={<LogOut />}>  
      </Route>

    </Routes>
     
     <Footer />

    </Router>
   
  );
}

export default App;
