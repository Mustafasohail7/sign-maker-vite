import './Hero.css'

import video_img from '../../assets/banner.jpg'

const Hero = () => {
  return (
    <div className='hero-div'>
      <div className='hero-container'>
        <div className='text-container'>
            <div className='heading'>
                My Letters
            </div>
            <div className='text'>
                <p>
                    Elevate your space and make a magnetic impression with our custom magnetic signs. Tailored for offices, homes, special occasions like weddings and birthdays, and any decorative you need.
                </p>
            </div>
        </div>
        <div className='video-container'>
          <img src={video_img} alt='video thumbnail' className='thumbnail'/>
        </div>
      </div>
    </div>
  )
}

export default Hero
