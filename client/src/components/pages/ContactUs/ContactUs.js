import React, { Component } from 'react';
import './style.css';

export default class ContactUs extends Component {
    render() {
        return (
            <div>
                <Image/>
                <div>
                    Hola como estas
                </div>
            </div>
        )
    }
}

function Image(){
    return(
        <div className="cover">
             <img src={ require('../../../imageLogo/contactUs.jpg') } alt="" />
        </div>
    )
}