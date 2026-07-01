import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AmbientBackground from './components/AmbientBackground'
import Home from './pages/Home'
import ProblemMarket from './pages/ProblemMarket'
import SolutionProduct from './pages/SolutionProduct'
import Team from './pages/Team'
import Contact from './pages/Contact'

export default function App() {
  return (
    <>
      <AmbientBackground />
      <Navbar />
      <main>
        <Home />
        <ProblemMarket />
        <SolutionProduct />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
