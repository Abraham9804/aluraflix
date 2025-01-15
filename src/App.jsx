import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import AppRoutes from './routes'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Videos from './components/Videos'
import ContextProvider from './context/Contexto'
import Header from './components/Header'

function App() {
  

  return (
    <>
      <Router>
        <ContextProvider>
        <Header color="#262626"/>
          <AppRoutes />
          
        </ContextProvider>
        <Footer />

      </Router>
      
    </>
  )
}

export default App
