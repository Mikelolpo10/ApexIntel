import { Routes, Route } from 'react-router'
import Homepage from './pages/Homepage.jsx'
import LegendsMenu from './pages/LegendsMenu.jsx'
import Legends from './pages/Legends.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import './App.css'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route index element={<Homepage />} />
        <Route path='/news/:id' />
        <Route path='/legends' element={<LegendsMenu />} />
        <Route path='/legends/:name' element={<Legends />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </>
  )
}

export default App
