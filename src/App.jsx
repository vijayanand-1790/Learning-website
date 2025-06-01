
import { Features } from 'tailwindcss'
import './App.css'
import Home from './Components/Home'
import NavBar from './Components/Navbar'
import Featuress from './Components/Featuress'
import About from './Components/About'
import Pricing from './Components/Pricing'
import NewsLetter from './Components/NewsLetter'
import Footer from './Components/Footer'


function App() {

  return (
    <>
      <NavBar/>
      <Home/>
      <Featuress/>
      <About/>
      <Pricing/>
      <NewsLetter/>
      <Footer/>
    </>
  )
}

export default App
