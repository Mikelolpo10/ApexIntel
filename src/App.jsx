import { Routes, Route } from 'react-router'
import Homepage from './pages/Homepage.jsx'
import LegendsMenu from './pages/LegendsMenu.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import './App.css'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route index element={<Homepage />} />
        <Route path='/legends' element={<LegendsMenu />} />
        <Route path='/news/:id' />
      </Routes>
    </>
  )
}

export default App
