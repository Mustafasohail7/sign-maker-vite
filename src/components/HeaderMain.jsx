import Header from './Header/Header'
import DropDown from './DropDown/DropDown'

import {useState} from 'react'

const HeaderMain = () => {

    const [dropDown,setDropDown] = useState(false)

    const options = [
        {id:0, name: 'home'},
        {id:1, name: '3D magnetic letters'},
        {id:2, name: 'acrylic letters'},
        {id:3, name: 'led lightbox'},
    ]

  return (
    <>
        <Header options={options} setDropDown={setDropDown}/>
        <DropDown options={options} dropDown={dropDown} setDropDown={setDropDown}/>
    </>
  )
}

export default HeaderMain
