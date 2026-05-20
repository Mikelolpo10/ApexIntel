import { Routes, Route } from 'react-router'
import { Suspense, lazy } from 'react'

const Homepage = lazy(() => import('./pages/Homepage.jsx'))
const LegendsMenu = lazy(() => import('./pages/LegendsMenu.jsx'))
const Legends = lazy(() => import('./pages/Legends.jsx'))
import LoadingPage from './components/LoadingPage.jsx'
import ErrorPage from './pages/PageNotFound.jsx'
import MainLayout from './components/MainLayout.jsx'

import ScrollToTop from './components/ScrollToTop.jsx'
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
