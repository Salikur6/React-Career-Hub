import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import { ToastContainer } from 'react-toastify'

function App() {


  return (
    <>
      <div className=''>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
        <ToastContainer />
      </div>
    </>
  )
}

export default App
