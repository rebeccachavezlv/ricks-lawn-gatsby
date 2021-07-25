import React from 'react'
import './nav-sidebar.styles.scss'
import Icon from '@mdi/react'
import { mdiMenu, mdiClose } from '@mdi/js';
import { CSSTransition } from 'react-transition-group';
import scrollTo from 'gatsby-plugin-smoothscroll';


class NavSidebar extends React.Component {

    state = {
        sidebarOpen: false
    }

    handleSidebar = () => {
        this.setState({
            sidebarOpen: !this.state.sidebarOpen
        })
    }

    render(){
        return(
            <div className='nav-sidebar'>

                <Icon className='menu-icon' 
                    path={mdiMenu}
                    title="MENU"
                    size={4}
                    onClick={this.handleSidebar}
                /> 

                <CSSTransition in={this.state.sidebarOpen} timeout={200} classNames="my-node"
                unmountOnExit>

                    <div className='sidebar-open'>

                        <Icon className='close-icon' 
                            path={mdiClose}
                            title="CLOSE"
                            size={2}
                            onClick={this.handleSidebar}
                        />

                        <div className='sidebar-links'>
                            <span onClick={() => scrollTo('#about')}><h1 onClick={this.handleSidebar}>About</h1></span>
                            <span onClick={() => scrollTo('#gallery')}><h1 onClick={this.handleSidebar}>Portfolio</h1></span>
                            <span onClick={() => scrollTo('#services-list')}><h1 onClick={this.handleSidebar}>Services</h1></span>
                            <span onClick={() => scrollTo('#contact')}><h1 onClick={this.handleSidebar}>Contact</h1></span>
                        </div>

                    </div>

                </CSSTransition>

            </div>
            
        )
    };
}
export default NavSidebar