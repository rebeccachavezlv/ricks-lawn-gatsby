import React from 'react'
import './hero.styles.scss'
import Button from '../Button/button.component'

const Hero = () => (
    <div className='hero'>
        <div className='hero-info'>
            <div className='title'>
                <h1>Rick's Lawn &<br />Landscaping</h1>
            </div>
            <div className='button-container'>
                <Button title='Call (702) 243-5553'></Button>
            </div>
        </div>
    </div>
)

export default Hero