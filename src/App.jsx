import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import Nav from './components/nav';
import Footer from './components/footer';
import './app.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <main className="mx-3">
        <Outlet />
      </main>
      <Footer/>
    </>
  )
}

export default App
