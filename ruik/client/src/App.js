import React, {useEffect} from 'react'
import "./App.css"
import Navbar from './components/header/Navbar'
import {
    BrowserRouter as Router,
    Switch, 
    Route,
    Redirect,
} from "react-router-dom";
import Login from './auth/Login';
import Register from './auth/Register';
import Notfiy from './notify/Notfiy';
import CenterContext from './components/mainlay/CenterContext';
// import Notify from './auth/Notify';
import { useSelector,useDispatch } from 'react-redux'
import { refreshToken } from './redux/actions/authAction'


const App = () => {
    const { auth } = useSelector(state => state)
    const dispatch = useDispatch()

    useEffect (() => {
        dispatch(refreshToken())
    },[dispatch])

    return (
       <Router>
             {/* <Notify /> */}
             <Navbar />
           <Switch>
             
               <Route exact path="/">
                  <CenterContext/>  
               </Route>
               <Route path="/login">
               {!auth.token ?<Login/>: <Redirect to ="/"/>}
               {/* <Login/>  */}
               </Route>
               <Route path = "/register">
                   <Register />
               </Route>
               <Route path = "/notify">
                <Notfiy/>
               </Route>
           </Switch>
       </Router>
    )
}

export default App
