import './App.css'

//components
import Headline from './components/Headline/Headline'
import HeaderMain from './components/HeaderMain'
import Hero from './components/Hero/Hero'
import Products from './components/Products/Products'
import Testimonials from './components/Testimonials/Testimonials'
import ProductGallery from './components/ProductGallery/ProductGallery'
import FAQ from './components/FAQ/FAQ'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <div className='sticky-header'>
        <Headline />
        <HeaderMain />
      </div>
      <Hero />
      <Products />
      <Testimonials />
      <ProductGallery />
      <FAQ />
      <Footer />
    </>
  )
}

export default App
