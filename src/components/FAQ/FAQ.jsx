import './FAQ.css'

import { useState } from 'react'

import { PiCaretDownBold } from 'react-icons/pi'

const FAQ = () => {

    const faqData = [
        {id:0,question:'lorem ipsum?',answer:'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'},
        {id:1,question:'lorem ipsum?',answer:'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'},
        {id:2,question:'lorem ipsum?',answer:'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'},
        {id:3,question:'lorem ipsum?',answer:'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'},
        {id:4,question:'lorem ipsum?',answer:'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'},
        {id:5,question:'lorem ipsum?',answer:'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'},
        {id:6,question:'lorem ipsum?',answer:'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'},
        {id:7,question:'lorem ipsum?',answer:'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'},
    ]

    const [selectedQ,setSelectedQ] = useState({s:null,l:null,r:null})

    const handleFAQ = (id) => {
        if(selectedQ.s===id){
            return setSelectedQ({
                s:null,
                l:null,
                r:null
            })
        }
        if(id%2===0){
            return setSelectedQ(
                {
                    s:id,
                    l:null,
                    r:id+1
                }
            )
        }else{
            return setSelectedQ(
                {
                    s:id,
                    l:id-1,
                    r:null
                }
            )
        }
    }

    console.log(selectedQ)

  return (
    <div className='faq-div'>
        <div className='faq-container'>
            <div className='faq-heading'>
                <h1>frequently asked questions</h1>
            </div>
            <div className='faq-flex'>
                {faqData.map((item)=>(
                    <div key={item.id} className='faq-item-super'>
                        <div className='faq-item' 
                        onClick={()=>handleFAQ(item.id)}
                        >
                            <div className='faq-question'>
                                <p>{item.question}</p>
                            </div>
                            <div className='faq-dropdown-btn-container'>
                                <PiCaretDownBold
                                className={`faq-dropdown-btn ${selectedQ.s===item.id ? 'rotate' : ''}`}/>
                            </div>
                        </div>
                        <div 
                        className={`faq-answer ${selectedQ.s===item.id ? 'visible' : ''}`}
                        >
                            <p>{item.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default FAQ
