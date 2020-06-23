import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

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
                                <Link to='/recipes'>All Recipes</Link>
                                <Link to='/'>Add a Recipe</Link>
                            </nav>

                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}