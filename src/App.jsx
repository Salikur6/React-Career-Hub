import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'

function App() {


  return (
    <>
      <div className=''>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
