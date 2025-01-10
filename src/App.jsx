import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import AppRoutes from './routes'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Videos from './components/Videos'
//import Header from './components/Header'

function App() {
  

  return (
    <>
      <Router>
        
        <AppRoutes />
        <Banner/>
        <Videos/>
        <Footer />

      </Router>
      
    </>
  )
}

export default App
