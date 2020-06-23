import React from 'react'
import './TopPanel.scss';

export default function TopPanel () {
    return (
        <div className='TopPanel'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <ul className="TopPanel__nav">
                            <li>
                                <a href='/#'>Log In</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}