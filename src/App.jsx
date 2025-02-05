import React from 'react'
import './App.css'
import './index.css'
import NavPage from './pages/NavPage'
import Header from './components/Header'
import Footer from './components/Footer'



function App() {
  return (
    <>
    <div>
      <Header></Header>
      <NavPage></NavPage>
      <Footer />
    </div>
    </>
  )
}

export default App
