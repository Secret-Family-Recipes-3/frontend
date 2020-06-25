import React from 'react';
import { Link } from 'react-router-dom';

export default function RecipeTile (props) {
    const { recipe } = props;

    return (
        <div key={recipe.id} className='col-md-6 col-lg-4 RecipeList__recipe'>
            <Link to={`/recipes/${recipe.id}`}>
                <div className='RecipeList__image-wrapper'>
                    { /* <img src={recipe.img || defaultImg} alt={recipe.title} /> */ }
                </div>
            </Link>
            <h5>{recipe.title}</h5>
        </div>
    );
}