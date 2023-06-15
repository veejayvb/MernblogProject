import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className='headerTitles'>
            <div className='headerTitleSm'> React & Node</div> 
            <div className='headerTitleLg'> Blog</div> 
        </div>
        <img className='headerImg'
         src="https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650w=900"
         alt="" />
    </div>
  )
}

export default Header