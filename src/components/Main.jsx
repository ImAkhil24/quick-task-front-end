import { useState } from "react";
import { Outlet, Route, Routes } from "react-router";
import Login from "./Login";
import User from "./User";
import Navigation from "./Navigation";
import Home from "./Home";

const Main = () => {

  return (
    <Routes>
      <Route path="/" element={
        <>
          <Navigation />
          <Outlet />
        </>
      }>
        <Route index element={<Home/>}></Route>
        <Route path="login" element={<Login/>} />
        <Route path="user" element={<User/>} />
      </Route>
      
    </Routes>
  )
}


export default Main;