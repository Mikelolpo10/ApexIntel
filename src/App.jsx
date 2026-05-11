import { Routes, Route } from 'react-router'
import Homepage from './pages/Homepage.jsx'
import Legends from './pages/Legends.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import './App.css'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route index element={<Homepage />} />
        <Route path='/legends' element={<Legends />} />
        <Route path='/news/:id' />
      </Routes>
    </>
  )
}

export default App
