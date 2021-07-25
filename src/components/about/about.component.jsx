import React from 'react';
import './about.styles.scss';

import AngiesList from './images/angies-list.png'
import BBB from './images/bbb.jpg'
import WaterSmart from './images/water-smart.jpg'

const About = () => (
    <div className='about-container' id='about'>
        <div className='about-info'>
            <div className='video'>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/IydDvFpVFnQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className='text'>
                <h1>About Us</h1>
                <p><b>Rick’s Lawn & Landscaping, Inc.</b> is your premiere landscaping and lawn care service. We offer a full line of services from design to installation, as well as the maintenance of beautiful outdoor spaces. <b>Rick Alcock</b> is a BBB-accredited, “water smart” contractor with over <b>30</b> years of experience serving the Las Vegas area. From day one, you can expect to deal directly with Rick himself. We work on landscapes all over town: from North to South, East to West and Boulder City to Lake Las Vegas. If it’s outdoor living you want, Rick can create it for you – on call and at your service!</p>
            </div>
        </div>
        <div className='awards'>
            <img src={AngiesList} alt=''></img>
            <img src={BBB} alt=''></img>
            <img src={WaterSmart} alt=''></img>
        </div>
    </div>
);

export default About