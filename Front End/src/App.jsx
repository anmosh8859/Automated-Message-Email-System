import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import Footer from "./Modules/Global_module/Footer";
import Login from "./Modules/Login_module/Login";
import Home from "./Modules/Home";
import { AdminRegister } from "./Modules/Register/AdminRegister";
import Header from "./Modules/Global_module/Header";
 import Message from "./Modules/Admin_module/Mesaage/Message";
import SuperAdmin from "./Modules/Admin_module/SuperAdmin/SuperAdmin";
import Admin from "./Modules/Admin_module/Admin/Admin";
import Profile from "./Modules/Admin_module/SuperAdmin/Profile";
import AuthProvider, {useAuth} from "./Modules/security/AuthContext";

function App() {

  function AuthenticatedRoute({children}){
    if(useAuth().isAuthenticated) return children
    else return <Navigate to="/" />
  }

  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
        <Header/>
          <Routes>
          <Route path = "/" element={<Home/>}/>

            <Route path = "/home" element={
            
            <AuthenticatedRoute>
              <Home/>
            </AuthenticatedRoute>
              
            }/>
            <Route path = "/login" element={<Login/>}/>
            <Route path = "/register" element={
            
            <AuthenticatedRoute>
              <AdminRegister/>
            </AuthenticatedRoute>
            
            }/>
            <Route path = "/message" element={
              
              <AuthenticatedRoute>
                <Message/>
              </AuthenticatedRoute>
            

            }/>
            <Route path = "/superAdmin" element={
            
              <AuthenticatedRoute>
                <SuperAdmin/>
              </AuthenticatedRoute>
            
            }/>
            <Route path = "/admin" element={
            
            <AuthenticatedRoute>
              <Admin/>
            </AuthenticatedRoute>
            
            }/>
            <Route path = "/profile" element={
              
              <AuthenticatedRoute>
                <Profile/>
              </AuthenticatedRoute>
              
            }/>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
