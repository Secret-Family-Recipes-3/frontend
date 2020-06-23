import React from 'react'
import './RecipeList.scss';
import Header from '../Header/Header';

export default function RecipeList () {
    return (
        <>
            <Header />
            <div className='RecipeList'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6 col-lg-4 RecipeList__recipe'>
                            <a href='/#'>
                                <div className='RecipeList__image-wrapper'>
                                    <img src="https://images.pexels.com/photos/1630588/pexels-photo-1630588.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt='recipe' />
                                </div>
                            </a>
                            <h5>Title</h5>
                        </div>
                        <div className='col-md-6 col-lg-4 RecipeList__recipe'>
                            <a href='/#'>
                                <div className='RecipeList__image-wrapper'>
                                    <img src="https://images.pexels.com/photos/2090903/pexels-photo-2090903.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt='recipe' />
                                </div>
                            </a>
                            <h5>Title</h5>
                        </div>
                        <div className='col-md-6 col-lg-4 RecipeList__recipe'>
                            <a href='/#'>
                                <div className='RecipeList__image-wrapper'>
                                    <img src="https://images.pexels.com/photos/4198283/pexels-photo-4198283.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt='recipe' />
                                </div>
                            </a>
                            <h5>Title</h5>
                        </div>
                        <div className='col-md-6 col-lg-4 RecipeList__recipe'>
                            <a href='/#'>
                                <div className='RecipeList__image-wrapper'>
                                    <img src="https://images.pexels.com/photos/4020664/pexels-photo-4020664.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt='recipe' />
                                </div>
                            </a>
                            <h5>Title</h5>
                        </div>
                        <div className='col-md-6 col-lg-4 RecipeList__recipe'>
                            <a href='/#'>
                                <div className='RecipeList__image-wrapper'>
                                    <img src="https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt='recipe' />
                                </div>
                            </a>
                            <h5>Title</h5>
                        </div>
                        
                        <div className='col-md-6 col-lg-4 RecipeList__recipe'>
                            <a href='/#'>
                                <div className='RecipeList__image-wrapper'>
                                </div>
                            </a>
                            <h5>A Recipe with no image</h5>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    );
}