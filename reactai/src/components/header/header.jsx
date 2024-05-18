import React from 'react';
import logo from '../../Assets/AIlogo.png'

const Header = () => {
  return (
    <div>
        <div class = 'flex items-center ml-8 mt-2'> 
            <img class='w-10 l-10' src={logo}  alt='ai'/>
            <h1 class='text-2xl' style={{ color: 'white' }}>Giene</h1>
        </div>
        <p class = 'text-center text-light-grey h-2'>__________________________________</p>
    </div>
  );
}

export default Header;
