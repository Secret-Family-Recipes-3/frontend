import React from 'react'
import './RecipeDetails.scss';
import Header from '../Header/Header';
import MainHeading from '../MainHeading/MainHeading';

export default function RecipeDetails () {

    const heading = 'Mediterranean soup';

    return (
        <div className='RecipeDetails'>
            <Header />

            <MainHeading heading={heading} />

            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>

                        <div className='box box-ingredients'>
                            <h4>Ingredients:</h4>

                            <div className='ingredient'>
                                <span className='ingredient__name'>Tomatoes</span>
                                <span className='ingredient__amount'>1 cup</span>
                            </div>
                            <div className='ingredient'>
                                <span className='ingredient__name'>Garbanzo beans</span>
                                <span className='ingredient__amount'>1 cup</span>
                            </div>
                            <div className='ingredient'>
                                <span className='ingredient__name'>Green beans</span>
                                <span className='ingredient__amount'>1 cup</span>
                            </div>
                        </div>

                        <div className='box box-invisible'>

                            <h4>Directions:</h4>

                            <div className='directions'>

                                <div className='direction'>
                                    <div className='direction__counter'>1</div>
                                    <div className='direction__content'>
                                        <p>Lorem ipsum dolor sit amet, minim veniam, quis
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    </div>
                                </div>

                                <div className='direction'>
                                    <div className='direction__counter'>2</div>
                                    <div className='direction__content'>
                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                                        u fugiat nulla pariatur. Excepteur non proident,
                                        sunt in culpa.</p>
                                    </div>
                                </div>
                                
                                <div className='direction'>
                                    <div className='direction__counter'>3</div>
                                    <div className='direction__content'>
                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                                        u fugiat nulla pariatur. Excepteur non proident,
                                        sunt in culpa.</p>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                    <div className='col-md-6'>
                        <div className='RecipeDetails__image-wrapper'>
                            { /* img here */ }
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-md-12'>
                        <div className='box box-invisible'>

                            <button className='button button-green'>Edit</button>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}