import React from 'react'
import './MainHeading.scss';

export default function MainHeading (props) {
    return (
        <div className='MainHeading'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <h2>{ props.heading }</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}