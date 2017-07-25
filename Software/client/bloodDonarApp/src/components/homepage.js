/**
 * Created by semanticbits on 21/7/17.
 */
import React, { Component } from 'react'
import autobind from 'autobind-decorator'
import { Image ,Carousel} from 'react-bootstrap'

export default class Homepage extends Component{
    render(){
        return(
            <Carousel>
                <Carousel.Item>
                    <img width={1280} height={720} alt="1280x720" src="../src/assets/title.jpg"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={1280} height={720} alt="1280x720" src="../src/assets/title1.jpg"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={1280} height={720} alt="1280x720" src="../src/assets/title3.jpg"/>
                </Carousel.Item>
            </Carousel>
        )
    }
}


