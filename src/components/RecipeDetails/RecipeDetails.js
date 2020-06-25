import React from 'react';
import MainHeading from '../MainHeading/MainHeading';

export default function RecipeDetails (props) {
    const { recipe, setPageMode } = props;

    return (
        <>
            <MainHeading heading={recipe.title} />

            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <h4>About:</h4>
                        <p>
                            {recipe.description}
                        </p>
                    </div>
                    <div className='col-md-6'>
                        <div className='RecipePage__image-wrapper'>
                            { /* img here */ }
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-md-12'> 
                        <button onClick={() => setPageMode('edit')} className='button button-green'>Edit</button>
                    </div>
                </div>

            </div>
        </>
    );
}