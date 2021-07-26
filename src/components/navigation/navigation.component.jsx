import React from 'react';
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import './navigation.styles.scss'
import scrollTo from 'gatsby-plugin-smoothscroll';
import logo from '../../images/ricks-logo.png'
import NavSidebar from '../nav-sidebar/nav-sidebar.component';

const Navigation = () =>  (
    <div className='navigation'>

        <Link className='nav-logo' to='/'>
            <StaticImage src='../../images/ricks-logo.png' 
                alt=""
                placeholder='blurred'
                onClick={() => scrollTo('#top')}
                height={100}
                width={100}
                layout='fixed'
            ></StaticImage>
        </Link>

        <div className='nav-links-text'>
            <div onClick={() => scrollTo('#about')}>About</div>
            <div onClick={() => scrollTo('#services-list')}>Services</div>
            <div onClick={() => scrollTo('#portfolioPreview')}>Portfolio</div>
            <div onClick={() => scrollTo('#contact')}>Contact</div>
        </div>

        <div className='nav-sidebar'>
            <NavSidebar />
        </div>
        
    </div> 
)

export default Navigation