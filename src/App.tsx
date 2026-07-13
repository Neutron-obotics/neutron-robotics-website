import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Product from './pages/Product'
import Team from './pages/Team'
import Faq from './pages/Faq'
import Contact from './pages/Contact'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <Product />
        <Team />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
