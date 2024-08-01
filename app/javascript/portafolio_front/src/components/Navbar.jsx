import React from 'react'

const Navbar = () => {
  return (
    <div className='nav flex justify-center sticky top-0'>
          <ul className='nav-items text-white flex flex-row m-5'>
            <li className='m-3 hover:text-customBlue'><a href="#">Education</a></li>
            <li className='m-3'><a href="#">Projects</a></li>
            <li className='m-3'><a href="#">About me</a></li>
            <li className='m-3'><a href="">Contact</a></li>
          </ul>
        </div>
  )
}

export default Navbar
