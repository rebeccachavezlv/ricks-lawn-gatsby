import React from 'react'
import Icon from '@mdi/react'
import { mdiOctagram, mdiUpdate, mdiVideoBox } from '@mdi/js'; 

import './info-section.styles.scss'

class InfoSection extends React.Component {

    state = {
        paragraphLeft: 'The dry, hot climate in this area presents many unique landscaping challenges to keep your yard and surrounding grounds looking their best. We understand these challenges and know the secrets to maintaining healthy and sustainable plants and outdoor fixtures.',
        paragraphRight: 'We currently offer full-service maintenance monthly, bi-weekly or weekly to the West Las Vegas area.',
        listLeft: ['Artifical Turf', 'Custom BBQS', 'Desert Landscapes', 'Drought-tolerant plants', 'Fire Pits', 'Fountains and water features', 'Irrigation', 'Misting systems', 'Outdoor lighting', 'Patio covers', 'Pavers', 'Putting greens', 'Retaining walls'],
        listRight: ['Broadleaf weed control', 'Clean-ups and rehabs', 'Fertilizing', 'Grub control', 'Hedging',
        'Lawn aeration','Lawn mowing, edging and trimming', 'Leaf removal', 'Light tree trimming',
        'Pond maintenance', 'Replanting, reseeding and over-seeding', 'Sprinkler system timer adjustments', 
        'Water feature repairs and maintenance'],
        titleLeft: 'Landscaping & Design Services',
        titleRight: 'Maintenance Services'
    }

    render(){
        return (
            <div className='info-container' id='services-list'>
            
                <div className='lists'>


                    <div className='left-column'>
                        <h1>{this.state.titleLeft}</h1>
                        <div className='section-info'>

                            <p>{this.state.paragraphLeft}</p>

                            {this.state.listLeft.map((text) => (
                                <li>{text}</li>
                            ))}
            
                        </div>
                    </div>

                    <div className='right-column'>
                        <h1>{this.state.titleRight}</h1>
                        <div className='section-info'>

                            <p>{this.state.paragraphRight}</p>
            
                            {this.state.listRight.map((text) => (
                                <li>{text}</li>
                            ))}
            
                        </div>
                    </div>

                </div>

                <div className='highlight-section'>
                    
                    <div className='box box-left'>
                        <Icon 
                            path={mdiOctagram}        
                            size={2}
                            title='Star'
                            color='green'
                        />
                        <h1>90 Day Warranty</h1>
                        <p>On all plants and trees with installation.</p>
                    </div>
                    <div className='box box-center'>
                        <Icon 
                            path={mdiUpdate}        
                            size={2}
                            title='Star'
                            color='green'
                        />
                        <h1>1-Year Warranty</h1>
                        <p>On brand-new irrigation installation.</p>
                    </div>
                    <div className='box box-right'>
                        <Icon 
                            path={mdiVideoBox}        
                            size={2}
                            title='Star'
                            color='green'
                        />
                        <h1>3-D Design Videos</h1>
                        <p>Available by request.</p>
                    </div>


                </div>

            </div>
        );
    }
}



export default InfoSection