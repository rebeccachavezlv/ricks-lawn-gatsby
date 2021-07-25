import React from 'react';
import './navigation.styles.scss'
import scrollTo from 'gatsby-plugin-smoothscroll';
import logo from '../../images/ricks-logo.png'
import NavSidebar from '../nav-sidebar/nav-sidebar.component';

class Navigation extends React.Component {
    state = {
        width: window.innerWidth
    }

    handleResizeWindow = () => {
        this.setState({
            width: window.innerWidth
        });
    }

    componentDidMount () {
        window.addEventListener("resize", this.handleResizeWindow);
    }

    componentWillUnmount(){
        window.removeEventListener("resize", this.handleResizeWindow);
    }

    render(){
    
        return (
            <div className='navigation'>
                <div className='nav-logo'>
                    <img src={logo} alt="" onClick={() => scrollTo('#top')}></img>
                </div>

                {this.state.width > 767 && 
                    <div className='nav-links-text'>
                        <span onClick={() => scrollTo('#about')}>About</span>
                        <span onClick={() => scrollTo('#services-list')}>Services</span>
                        <span onClick={() => scrollTo('#gallery')}>Portfolio</span>
                        <span onClick={() => scrollTo('#contact')}>Contact</span>
                    </div>
                }

                {this.state.width <= 767 &&
                    <div className='nav-sidebar'>
                        <NavSidebar />
                    </div>
                }
            </div> 
        )
    } 
}

export default Navigation