import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image";
import './portfolio-preview.styles.scss'
import Button from '../Button/button.component';

const PortfolioPreview = ({ imageList }) => {

    // const data = useStaticQuery(graphql`
    //     query {
    //         allDatoCmsImageGallery {
    //             edges {
    //                 node {
    //                     photos {
    //                         gatsbyImageData
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // `)
    return (

        <div className='previewContainer' id='portfolioPreview'>

            <div className='photoContainer'>
                <StaticImage src='./images/desert-4.jpg' placeholder='blurred' />
                <StaticImage src='./images/desert-9.jpg' placeholder='blurred'/>
                <StaticImage src='./images/desert-12.jpg' placeholder='blurred'/>
                <StaticImage src='./images/green-5.jpg' placeholder='blurred'/>
                <StaticImage src='./images/pavers-21.jpg' placeholder='blurred'/>
                <StaticImage src='./images/turf-2.jpg' placeholder='blurred'/>
                <StaticImage src='./images/bbq-pit-26.jpg' placeholder='blurred'/>
                <StaticImage src='./images/desert-21.jpg' placeholder='blurred'/>
                <StaticImage src='./images/green-14.jpg' placeholder='blurred'/>
                <StaticImage src='./images/pavers-8.jpg' placeholder='blurred'/>
                <StaticImage src='./images/pavers-3.jpg' placeholder='blurred'/>
                <StaticImage src='./images/turf-1.jpg' placeholder='blurred'/>

            </div>

            <div className='textSection'>
                <Link className='portfolioLink' to='/portfolio'><Button title='View our gallery' /></Link>
            </div>

        </div>

    )
}
export default PortfolioPreview

