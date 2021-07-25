import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import Icon from '@mdi/react'
import { mdiFullscreen, mdiChevronLeft } from '@mdi/js';
import './gallery.styles.scss'

class Gallery extends React.Component {

    state = {
        fullScreen: false,
        currentIndex: 0,
        images: this.props.imageList,
        thumbnailIndex: [0, 1, 2, 3, 4, 5, 6],
        prevIndex: this.props.imageList.length - 1
    }

    handleFullScreen = () => {
        this.setState({fullScreen: !this.state.fullScreen})
    }

    handlePrev = () => {
        if(this.state.currentIndex - 1 < 0){
            this.setState({currentIndex: this.state.images.length - 1})
        } else {
            this.setState({currentIndex: this.state.currentIndex-1})
        }
    }

    handleNext = () => {
        if (this.state.currentIndex + 1  === this.state.images.length){
            this.setState({currentIndex: 0})
        } else {
            this.setState({currentIndex: this.state.currentIndex+1})
        }
    }

    handleThumbnail = (index) => {
        let newIndex = this.state.thumbnailIndex[index]
        this.setState({currentIndex: newIndex})
    }

    handleNextThumb = () => {
        let newArray = [...this.state.thumbnailIndex]

        for (let i = 0; i < this.state.thumbnailIndex.length; i++){
            if(this.state.thumbnailIndex[i] + 1 < this.state.images.length){
                newArray[i] =  this.state.thumbnailIndex[i] + 1
            } else {
                newArray[i] = 0
            }
        }

        this.setState({thumbnailIndex: newArray})
    }

    handlePrevThumb = () => {
        let newArray = [...this.state.thumbnailIndex]

        for (let i = 0; i < this.state.thumbnailIndex.length; i++){
            if(this.state.thumbnailIndex[i] -1 < 0){
                newArray[i] =  this.state.images.length - 1
            } else {
                newArray[i] = this.state.thumbnailIndex[i] - 1
            }
        }

        let newPrevIndex 

        if(this.state.prevIndex - 1 < 0){
            newPrevIndex = this.state.images.length - 1
        } else {
            newPrevIndex = this.state.prevIndex - 1
        }

        this.setState({thumbnailIndex: newArray, prevIndex: newPrevIndex})
    }

    render(){
        let imageDisplay = ''
        if (this.state.fullScreen){
            imageDisplay = 'full-screen'
        } else {
            imageDisplay = 'gallery-image'
        }
        return (
            <div className={imageDisplay} id='gallery'>
                <div className='main-nav'>
                    <div className='arrow-left'>
                        <Icon onClick={this.handlePrev} path={mdiChevronLeft}
                                    title="PREVIOUS"
                                    size={2}
                        />
                    </div>

                    <div className='image-container'>
                    
                        <img src={this.state.images[this.state.currentIndex].url} alt='' />

                        <Icon onClick={this.handleFullScreen} className='full-screen-button' path={mdiFullscreen}
                            title="FULL-SCREEN"
                            size={2}
                        />

                    </div>

                    <div className='arrow-right'>
                        <Icon onClick={this.handleNext} path={mdiChevronLeft}
                            title="NEXT"
                            size={2}
                            horizontal
                        />
                    </div>

                </div>

                {!this.state.fullScreen &&
                    <div className='thumbnails'>
                    
                        <div className='arrow-left'>
                            <Icon onClick={this.handlePrevThumb} path={mdiChevronLeft}
                                        title="PREVIOUS"
                                        size={2}
                            />
                        </div>


                            <div className='prev-image'>
                                <img src={this.state.images[this.state.prevIndex].url} alt='' />
                            </div>
                   
                            <img src={this.state.images[this.state.thumbnailIndex[0]].url} alt='' onClick={() => this.handleThumbnail(0)} />
                            <img src={this.state.images[this.state.thumbnailIndex[1]].url} alt='' onClick={() => this.handleThumbnail(1)} />
                            <img src={this.state.images[this.state.thumbnailIndex[2]].url} alt='' onClick={() => this.handleThumbnail(2)} />
                            <img src={this.state.images[this.state.thumbnailIndex[3]].url} alt='' onClick={() => this.handleThumbnail(3)} />
                            <img src={this.state.images[this.state.thumbnailIndex[4]].url} alt='' onClick={() => this.handleThumbnail(4)} />
                            <img src={this.state.images[this.state.thumbnailIndex[5]].url} alt='' onClick={() => this.handleThumbnail(5)} />
                            
                            <div className='next-image'>
                                <img src={this.state.images[this.state.thumbnailIndex[6]].url} alt='' />
                            </div>
                            
                      

                        <div className='arrow-right'>
                            <Icon onClick={this.handleNextThumb} path={mdiChevronLeft}
                                title="NEXT"
                                size={2}
                                horizontal
                            />
                        </div>

                    </div>
                }

            </div>
        );
    }

}

export default Gallery