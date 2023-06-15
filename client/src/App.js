// import Topbar from "./Component/Topbar/Topbar";
import Layout from "./Layout";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Home from "./Pages/Home/Home";
import Single from "./Pages/Single/Single";
import Write from "./Pages/Write/Write";
import Settings from './Pages/SettingPage/Settings'
import {Route , Routes } from 'react-router-dom'
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const { user } = useContext(Context);
  console.log(user)
  // let user = false
  return (
  
      <Routes>
        <Route path= '/' element = {<Layout/>} >
          <Route index element = { user ? <Home/> : <Login/>} />
            <Route path = 'login' element = {user ?   <Home/> : <Login/> } />
            <Route path = 'register' element = {user ?  <Home/> : <Register/> } />
            <Route path='settings' element= {user ? <Settings/>  : <Login/>} />
            <Route path = 'post'>
              <Route index element ={<Write/> } />
              <Route path = ':id' element = {  <Single/> } />
            </Route>
            
            
        </Route>
      </Routes>
    
  );
}

export default App;
