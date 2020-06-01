import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png';
import './Logo.css';

const Logo = () =>{
    return(
        <div className='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-5" options={{ max : 40 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner pa2">
                    <img style={{paddingTop:'5px'}}src={brain} alt='brain logo'/>
                </div>
            </Tilt>
        </div>
    )
}

export default Logo;