import React from 'react';
import MainHeading from '../MainHeading/MainHeading';
import { useHistory } from 'react-router-dom';
import jwt from 'jsonwebtoken';
import authAxios from '../../utils/authAxios';

export default function RecipeDetails (props) {
    const { recipe, setPageMode } = props;
    const { push } = useHistory();

    function handleDelete (event) {
        const userId = (jwt.decode(localStorage.getItem('loginToken'))).user_id;

        const requestData = {
            id: recipe.id,
            created_by: userId
        };

        authAxios().delete(`/api/recipes/${recipe.id}`, requestData)
            .then(response => {
                push('/recipes');
            })
            .catch(error => {
                console.log('Could not add the recipe');
            });
    }

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
                        <button onClick={handleDelete} className='button'>Delete</button>
                    </div>
                </div>

            </div>
        </>
    );
}