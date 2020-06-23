import React from 'react'
import './Header.scss';

export default function Header () {
    return (
        <header className='Header'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <div className="Header__inner">

                            <a href='/#' className="Header__logo">
                                <h1>Secret Family Recipes</h1>
                            </a>

                            <nav className="Header__nav">
                                <a href='/#'>All Recipes</a>
                                <a href='/#'>Add a Recipe</a>
                            </nav>

                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}