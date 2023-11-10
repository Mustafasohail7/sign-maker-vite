import './Testimonials.css'

import fander_profile from '../../assets/michael-fander-profile.jpeg'
import jane_profile from '../../assets/jane-doe-profile.jpeg'
import john_profile from '../../assets/john-doe-profile.jpeg'

import { AiOutlineArrowLeft,AiOutlineArrowRight } from 'react-icons/ai'

const Testimonials = () => {

    const testimonial_data = [
        {id:0, image:fander_profile, name:'michael fander', testimonial:'lorem ipsum dolor sit amet, consectetuer Adipiscing elit, sed diam nonummy nibh euis-lorem ipsum dolor sit amet, consectetuer Adipiscing elit, sed diam nonummy nibh euis-lorem ipsum'},
        {id:1, image:jane_profile, name:'jane doe', testimonial:'lorem ipsum dolor sit amet, consectetuer Adipiscing elit, sed diam nonummy nibh euis-lorem ipsum dolor sit amet, consectetuer Adipiscing elit, sed diam nonummy nibh euis-lorem ipsum'},
        {id:2, image:john_profile, name:'john doe', testimonial:'lorem ipsum dolor sit amet, consectetuer Adipiscing elit, sed diam nonummy nibh euis-lorem ipsum dolor sit amet, consectetuer Adipiscing elit, sed diam nonummy nibh euis-lorem ipsum'}
    ]

  return (
    <div className='testimonials-div'>
        <div className='testimonials-button-container'>
            <AiOutlineArrowLeft className='testimonials-button left' />
            <div className='testimonials-container'>
                <div className='testimonial-heading'>
                    <h1>Testimonials</h1>
                </div>
                <div className='testimonials-flex'>
                    {testimonial_data.map((testimonial) => (
                        <div key={testimonial.id} className='testimonial'>
                            bruh
                        </div>
                    ))}
                </div>
            </div>
            <AiOutlineArrowRight className='testimonials-button right' />
        </div>
    </div>
  )
}

export default Testimonials
