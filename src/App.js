import React from "react";
import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import Header from "./components/Header/header";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
          <Header/>
          <Routes>
              <Route path={"/home"} element={<HomePage/>}/>
              <Route path={"*"} element={<Navigate to="/home" />}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
