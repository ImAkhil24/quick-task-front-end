import { useState } from "react";
import { Outlet, Route, Routes } from "react-router";
import Login from "./Login";
import User from "./User";
import Navigation from "./Navigation";
import Home from "./Home";
import Signup from "./Signup";
import useToken from "../services/useToken";

const UnprotectedView = ({ auth }) => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Login setToken={auth.setToken} />} />
        <Route path="signup" element={<Signup />} />
        <Route path="*" element={<Login setToken={auth.setToken} />} />
      </Route>
    </Routes>
  );
};

const ProtectedView = ({ auth }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navigation auth={auth} />
            <Outlet />
          </>
        }
      >
        <Route index element={<Home />}></Route>
        <Route path="login" element={<Login />} />
        <Route path="user" element={<User />} />
      </Route>
    </Routes>
  );
};

const Main = () => {
  const { token, setToken } = useToken();

  return token ? (
    <ProtectedView auth={{ token, setToken }} />
  ) : (
    <UnprotectedView auth={{ token, setToken }} />
  );
};

export default Main;
