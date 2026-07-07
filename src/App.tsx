import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AmbientBackground from './components/AmbientBackground'
import Home from './pages/Home'
import Product from './pages/Product'
import Team from './pages/Team'
import Contact from './pages/Contact'

export default function App() {
  return (
    <>
      <AmbientBackground />
      <Navbar />
      <main>
        <Home />
        <Product />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
