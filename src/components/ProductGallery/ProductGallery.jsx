import './ProductGallery.css'

import {useState} from 'react'

import item_1 from '../../assets/portfolio/1.jpg'
import item_2 from '../../assets/portfolio/2.png'
import item_3 from '../../assets/portfolio/3.jpg'
import item_4 from '../../assets/portfolio/4.jpg'
import item_5 from '../../assets/portfolio/5.jpg'
import item_6 from '../../assets/portfolio/6.png'

const ProductGallery = () => {

    const [selected, setSelected] = useState(0)

    const product_data = [
        {id:0, name:'all'},
        {id:1, name:'3D Magnetic Letters'},
        {id:2, name:'Acrylic Letters'},
        {id:3, name:'LED Lightbox'},
    ]

    const portfolio = [
        {id:0, name:'item 1', image:item_1},
        {id:1, name:'item 2', image:item_2},
        {id:2, name:'item 3', image:item_3},
        {id:3, name:'item 4', image:item_4},
        {id:4, name:'item 5', image:item_5},
        {id:5, name:'item 6', image:item_6},
    ]

  return (
    <div className='pg-div'>
        <div className='pg-container'>
            <div className='pg-headings'>
                <h1>Product Gallery</h1>
                <div className='pg-products'>
                    {product_data.map((product) => (
                        <div key={product.id} 
                        className={`pg-product-name ${selected===product.id ? 'active' : ''}`} 
                        onClick={()=>setSelected(product.id)}
                        >
                        {product.name}
                        </div>
                    ))}
                </div>
            </div>
            <div className='images-grid'>
                {portfolio.map((item) => (
                    <div key={item.id} 
                    className={`image-container ${item.id===2 ? 'span-two-rows':''} ${item.id===3 ? 'span-two-cols' : ''}`}
                    >
                        <img src={item.image} alt={item.name} className='image'/>
                    </div>
                ))}
            </div>
            <div className='more-btn-container'>
                <button className='more-btn'>show more</button>
            </div>
        </div>
    </div>
  )
}

export default ProductGallery
