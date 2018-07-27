import React, { Component } from 'react';
import ImageMapper from 'react-image-mapper';
import StorageService from '../../services/storage-service';

class HomePage extends Component{


    constructor(props) {
        super(props);

        this.state = {
            url : 'https://c1.staticflickr.com/5/4052/4503898393_303cfbc9fd_b.jpg',
            map : {
                name: "my-map",
                areas: [
                    { shape: "poly", coords: [25,33,27,300,128,240,128,94] },
                    { shape: "poly", coords: [219,118,220,210,283,210,284,119] },
                    { shape: "poly", coords: [381,241,383,94,462,53,457,282] },
                    { shape: "poly", coords: [245,285,290,285,274,239,249,238] },
                ]
            }
        };
    }

    /**
     * Fires off when the image has finished loading
     */
    imageLoaded(){
        console.log('the image has finished loading!');
    }

    /**
     * Fires off when the image is clicked.
     * @param area
     */
    imageClicked(area){
        console.log('the image has been clicked in the following area: ', area);
    }

    /**
     * Fires off when the mouse rolls over a specific area of the image.
     * @param area
     */
    imageEnteredArea(area){
        console.log('the mouse has rolled over a specific area of the image. The area is : ', area);
    }

    /**
     * Fires off when the mouse has left a specific area of the image.
     * @param area
     */
    imageLeftArea(area){
        console.log('the mouse has left a specific area of the image. The area is : ', area);
    }

    /**
     * Fires off when the image is clicked outside of desired area
     * @param evt
     */
    imageOutsideClick(evt){

        let coordinates = {
            x : evt.pageX,
            y : evt.pageY
        };

        //Example on how to save to local storage....
        StorageService.save('coordinates', coordinates);

        console.log('the image has been clicked but outside of the desired area in the folllowing coordinates.', coordinates);
    }


    render() {
        return(
            <div>
                <ImageMapper src={this.state.url} map={this.state.map} width={500}
                             onLoad={() => this.imageLoaded()}
                             onClick={area => this.imageClicked(area)}
                             onMouseEnter={area => this.imageEnteredArea(area)}
                             onMouseLeave={area => this.imageLeftArea(area)}
                             onImageClick={evt => this.imageOutsideClick(evt)}
                />
            </div>
        );
    }
}

export default HomePage;