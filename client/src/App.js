import "./App.css"
import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Header from "./components/Header"
import Footer from "./components/Footer"
import LoginScreen from "./screens/LoginScreen"
import RegisterScreen from "./screens/RegisterScreen"
import HomeScreen from "./screens/HomeScreen"

function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='/login' element={<LoginScreen />} />
          <Route path='/register' element={<RegisterScreen />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  )
}

export default App
