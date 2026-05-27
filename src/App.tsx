import { Routes, Route } from 'react-router'
import { Suspense, lazy } from 'react'

const Homepage = lazy(() => import('./pages/Homepage.js'))
const LegendsMenu = lazy(() => import('./pages/LegendsMenu.js'))
const Legends = lazy(() => import('./pages/Legends.js'))
import LoadingPage from './components/LoadingPage.js'
import ErrorPage from './pages/PageNotFound.js'
import MainLayout from './components/MainLayout.js'

import ScrollToTop from './components/ScrollToTop.js'
import './App.css'

function App() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route index element={<Homepage />} />
            <Route path='/news/:id' />
            <Route path='/legends' element={<LegendsMenu />} />
            <Route path='/legends/:name' element={<Legends />} />
            <Route path='*' element={<ErrorPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  )
}

export default App
