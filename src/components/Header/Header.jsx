import './Header.css'

import logo from '../../assets/logo.png'
import { BsCart } from 'react-icons/bs'

const Header = () => {

    const options = [
        {id:1, name: 'home'},
        {id:2, name: '3D magnetic letters'},
        {id:3, name: 'acrylic letters'},
        {id:4, name: 'led lightbox'},
    ]

  return (
    <div className='header-div'>
        <div className='header-container'>
            <div className='header-left'>
                <div className='logo-container'>
                    <img src={logo} alt='logo' className='logo' />
                </div>
                <div className='option-flex'>
                    {options.map(option => (
                        <div key={option.id} className='option'>
                            {option.name}
                        </div>
                    ))}
                </div>
            </div>
            <div className='header-cart-container header-right'>
                <div className='cart-container'>
                    <BsCart className='cart'/>
                </div>
                <div className='quote-btn-container'>
                    <button className='quote-btn'>get a quote</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header
