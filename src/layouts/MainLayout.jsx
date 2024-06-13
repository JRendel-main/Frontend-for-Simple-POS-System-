import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'
import FloatingButton from '../components/FloatingButton'
import './../styles/FloatingButton.css'

const MainLayout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <main>
        <div className="container mt-5">
          <div className="bg-light p-2 rounded-2">
            {children}
            <FloatingButton />
          </div>
        </div>
      </main>
    </div>
  )
}

export default MainLayout
