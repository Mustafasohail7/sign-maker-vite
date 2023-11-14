import './Footer.css'

import logo from '../../assets/logo.png'

import { FaFacebookF,FaInstagram,FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {

    const socials = [
        {id:0, name:'facebook', link:'https://www.facebook.com', image:<FaFacebookF />},
        {id:1, name:'instagram', link:'https://www.instagram.com', image:<FaInstagram />},
        {id:2, name:'linkedin', link:'https://www.linkedin.com', image:<FaLinkedinIn />},
    ]

    const footer_links = [
        {id:0,name:'about'},
        {id:1,name:'careers'},
        {id:2,name:'status'},
        {id:3,name:'contact'},
        {id:4,name:'advertise'},
        {id:5,name:'account'},
        {id:6,name:'terms of use'},
        {id:7,name:'blogs'},
        {id:8,name:'888-885-6556'},
        {id:9,name:'privacy policy'},
        {id:10,name:'help'},
        {id:11,name:'info@msigncenter.com'},
    ]

  return (
    <div className='footer-div'>
        <div className='footer-container'>
            <div className='main-footer'>
                <div className='logo-info'>
                    <div className='footer-logo-container'>
                        <img src={logo} alt='logo' className='footer-logo'/>
                    </div>
                    <div className='footer-address'>
                        <p>lorem ipsum dolor sit amet,</p>
                        <p>lorem ipsu dolor ipsumlore,</p>
                        <p>lorem ipsu dolor ipsumlorem</p>
                    </div>
                    <div className='footer-social-links'>
                        {socials.map((social)=>(
                            <div key={social.id} className='social-icon-container'>
                                <a href={social.link} target='_blank' rel='noreferrer'>
                                    {social.image}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='rest-info'>
                    {footer_links.map((link)=>(
                        <div key={link.id} className='footer-name-item'>
                            <p>{link.name}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className='bottom-line'>
                <p>Copyright 2023 MyLetters©</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
