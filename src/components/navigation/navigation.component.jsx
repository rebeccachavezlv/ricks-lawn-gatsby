import React from 'react';
import './navigation.styles.scss'
import scrollTo from 'gatsby-plugin-smoothscroll';
import logo from '../../images/ricks-logo.png'
import NavSidebar from '../nav-sidebar/nav-sidebar.component';

const Navigation = () =>  (
    <div className='navigation'>
        <div className='nav-logo'>
            <img src={logo} alt="" onClick={() => scrollTo('#top')}></img>
        </div>

        <div className='nav-links-text'>
            <div onClick={() => scrollTo('#about')}>About</div>
            <div onClick={() => scrollTo('#services-list')}>Services</div>
            <div onClick={() => scrollTo('#gallery')}>Portfolio</div>
            <div onClick={() => scrollTo('#contact')}>Contact</div>
        </div>

        <div className='nav-sidebar'>
            <NavSidebar />
        </div>
        
    </div> 
)

export default Navigation