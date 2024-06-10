import './App.css'
import Card from './Card'
import Hero from './Hero'
import NavBar from './NavBar'
import ProgressBar from './ProgressBar'
import CardJoin from './CardJoin'
import Footer from './Footer'
function App() {

  return (
    <>
    
    <NavBar/>
    <div className='flex justify-center flex-col'>
    <Hero/>
    <ProgressBar/>
    <CardJoin/>
    <Footer/>
    </div>

    </>
  )
}

export default App
