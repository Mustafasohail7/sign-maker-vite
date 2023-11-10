import './Products.css'

import magnetic_letters_banner from '../../assets/magnetic-letters-banner.jpg'
import acrylic_letters_banner from '../../assets/acrylic-letters-banner.jpg'
import led_lightbox_banner from '../../assets/led-lightbox-banner.jpg'

const Products = () => {

    const products = [
        {id:0, image: magnetic_letters_banner, name:'3D Magnetic Letters', description: 'lorem ipsum dolor sit amet, consectetuer Adipiscing elit, sed diam nonummy nibh'},
        {id:1, image: acrylic_letters_banner, name:'Acrylic Letters', description: 'lorem ipsum dolor sit amet, consectetuer Adipiscing elit, sed diam nonummy nibh'},
        {id:2, image: led_lightbox_banner, name:'LED Lightbox', description: 'lorem ipsum dolor sit amet, consectetuer Adipiscing elit, sed diam nonummy nibh'},
    ]

  return (
    <div className='products-div'>
        <div className='products-container'>
            <div className='products-heading-container'>
                <h1 className='products-heading'>New Products</h1>
                <p className='products-subheading'>lorem ipsum dolor sit amet, consectetuer Adipiscing elit, sed dia nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam</p>
            </div>
            <div className='products-flex'>
                {products.map((product) => (
                    <div key={product.id} className='product'>
                        <div className='product-img-container'>
                            <img src={product.image} alt={product.name} className='product-img'/>
                        </div>
                        <div className='product-name'>
                            <div>
                                <p>{product.name}</p>
                            </div>
                        </div>
                        <div className='product-description'>
                            <p>{product.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Products
