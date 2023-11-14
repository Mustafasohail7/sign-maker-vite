import './Testimonials.css'

import { useState,useEffect } from 'react'

import fander_profile from '../../assets/michael-fander-profile.jpeg'
import jane_profile from '../../assets/jane-doe-profile.jpeg'
import john_profile from '../../assets/john-doe-profile.jpeg'

import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi'

const Testimonials = () => {

    const [active,setAcitve] = useState(0)
    const [isMobile,setIsMobile] = useState(null)

    const handleRightButtonClick = () => {
        setAcitve((prevIndex) => (prevIndex + 1) % testimonial_data.length);
    };
    
      const handleLeftButtonClick = () => {
        setAcitve((prevIndex) => (prevIndex - 1 + testimonial_data.length) % testimonial_data.length);
    };

    const testimonial_data = [
        {id:0, image:fander_profile, name:'michael fander', testimonial:'lorem ipsum dolor sit amet, consectetuer Adipiscing elit, sed diam nonummy nibh euis-lorem ipsum dolor sit amet, consectetuer Adipiscing elit, sed diam nonummy nibh euis-lorem ipsum'},
        {id:1, image:jane_profile, name:'jane doe', testimonial:'lorem ipsum dolor sit amet, consectetuer Adipiscing elit, sed diam nonummy nibh euis-lorem ipsum dolor sit amet, consectetuer Adipiscing elit, sed diam nonummy nibh euis-lorem ipsum'},
        {id:2, image:john_profile, name:'john doe', testimonial:'lorem ipsum dolor sit amet, consectetuer Adipiscing elit, sed diam nonummy nibh euis-lorem ipsum dolor sit amet, consectetuer Adipiscing elit, sed diam nonummy nibh euis-lorem ipsum'}
    ]

    useEffect(() => {
        const handler = () => {
            if(window.innerWidth<=780){
                setIsMobile(true)
            }else{
                setIsMobile(false)
            }
        }
        window.addEventListener('resize',handler);
        handler()

        return () => {
            window.removeEventListener('resize',handler);
        }
    })

  return (
    <div className='testimonials-div'>
        <div className='testimonials-container'>
            <div className='testimonial-heading'>
                <h1>Testimonials</h1>
            </div>
            <div className='testimonials-button-container'>
                <div className='caret-container' onClick={handleLeftButtonClick}>
                    <PiCaretLeftBold className='testimonials-button left'/>
                </div>
                <div className='testimonials-flex'>
                    {testimonial_data.map((testimonial) => {
                        if(isMobile && testimonial.id!==active) return null
                        return (
                        <div key={testimonial.id} className='testimonial'>
                            <div className='testimonial-profile'>
                                <img src={testimonial.image} alt='profile' className='testimonial-img'/>
                            </div>
                            <div className='testimonial-text'>
                                <div className='testimonial-name'>
                                    {testimonial.name}
                                </div>
                                <div className='testimonial-desc'>
                                    {testimonial.testimonial}
                                </div>
                            </div>
                        </div>
                        )
                    })}
                </div>
                <div className='caret-container' onClick={handleRightButtonClick}>
                    <PiCaretRightBold className='testimonials-button right' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonials
