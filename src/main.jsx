import { StrictMode } from 'react'
import './index.css'
import { createRoot } from 'react-dom/client'
import Navbar from './Navbar.jsx'
import {BrowserRouter,Routes,Route, Outlet} from "react-router-dom"
import Home from './Home.jsx'
import Movie from './Movie.jsx'
import DashBoard from './dashboard/dashboard.jsx'
import ThreaterForm from './dashboard/form-component/threaterform.jsx'
import ShowForm from './dashboard/form-component/showform.jsx'
import Booking from './dashboard/form-component/Booking.jsx'
import Login from './Login.jsx'
import SignUp from './SignUp.jsx'
import Shows from './Shows.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    
    <Routes>
      <Route element={<Navbar/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/movies' element={<Movie/>}/>
        <Route path='/dashboard' element={<DashBoard/>}>
            <Route path='Addthreater' element={<ThreaterForm/>}/>
            <Route path='Addshows' element={<ShowForm/>}/>
            <Route path='bookings' element={<Booking/>}/>
        </Route>
        <Route path='/:id/book/:movieid' element={<Shows/>}/>
      </Route>
      <Route path='/Login'element={<Login/>} />
      <Route path='/singup'element={<SignUp/>} />
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
