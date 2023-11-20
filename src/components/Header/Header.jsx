import './Header.css'

import { useState, useEffect } from 'react'

import logo from '../../assets/logo.png'
import { BsCart } from 'react-icons/bs'
import { FaBars } from 'react-icons/fa'

const Header = ({options,setDropDown}) => {

    const [selected,setSelected] = useState(1)

    useEffect(() => { 
        const handleScroll = () => {
            if (window.scrollY > 500) {
                setDropDown(false)
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    },[setDropDown])

    const toggleMenu = () => {
        setDropDown(prev => !prev)
    }

    const handleResize = () => {
        if(window.innerWidth > 740) {
            setDropDown(false)
        }
    }

    useEffect(()=> {
        window.addEventListener('resize',handleResize)

        return () => {
            window.removeEventListener('resize',handleResize)
        }
    })

  return (
    <div className='header-div'>
        <div className='header-container'>
            <div className='header-left'>
                <div className='toggle-bar' onClick={toggleMenu}>
                    <FaBars/>
                </div>
                <div className='logo-container'>
                    <img src={logo} alt='logo' className='logo' />
                </div>
                <div className='option-flex'>
                    {options.map(option => (
                        <div key={option.id} 
                        className={`option ${selected === option.id ? 'selected' : ''}`}
                        onClick={() => setSelected(option.id)}
                        >
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
