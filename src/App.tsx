import { Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AmbientBackground from './components/AmbientBackground'
import Home from './pages/Home'
import ProblemMarket from './pages/ProblemMarket'
import SolutionProduct from './pages/SolutionProduct'
import Team from './pages/Team'
import Contact from './pages/Contact'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <AmbientBackground />
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/probleme-marche" element={<ProblemMarket />} />
        <Route path="/solution-produit" element={<SolutionProduct />} />
        <Route path="/equipe" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}
