import React, { useState } from 'react';
import MainHeading from '../MainHeading/MainHeading';
import jwt from 'jsonwebtoken';
import authAxios from '../../utils/authAxios';
import { useHistory } from 'react-router-dom';
import { recipeAddSchema } from '../../schema/formSchema';
import * as yup from 'yup';

export default function RecipeAdd (props) {
    const { push } = useHistory();

    const initialRecipeData = {
        title: '',
        description: ''
    };

    const initialErrors = {
        title: '',
        description: ''
    };

    const [editedRecipeData, setEditedRecipeData] = useState(initialRecipeData);
    const [errors, setErrors] = useState(initialErrors);
    const [submitDisabled, setSubmitDisabled] = useState(true);

    function handleInputChange (event) {
        const fieldName = event.target.name;
        const fieldValue = event.target.value;

        setEditedRecipeData({
            ...editedRecipeData,
            [fieldName]: fieldValue
        });

        yup.reach(recipeAddSchema, fieldName)
            .validate(fieldValue)
            .then(valid => {
                setErrors({...errors, [fieldName]: ''});
            })
            .catch(err => {
                setErrors({...errors, [fieldName]: err.errors[0]});

                // console.log(errors);
            })
    }

    function submitRecipeForm (event) {
        event.preventDefault();
        
        const userId = (jwt.decode(localStorage.getItem('loginToken'))).user_id;
        
        const requestData = {
            ...editedRecipeData,
            created_by: userId,
            private: true,
        }

        authAxios().post('/api/recipes', requestData)
            .then(response => {
                setEditedRecipeData(initialRecipeData);
                push('/');
            })
            .catch(error => {
                console.log('Could not add the recipe');
            });
    }

    return (
        <div className='RecipeAdd'>
            <MainHeading heading='Add a recipe' />

            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        {
                            Object.keys(errors).map(
                                (item, key) => {
                                    if (errors[item]) {
                                        return (
                                            <p key={key} className='error'>
                                                {errors[item]}
                                            </p>
                                        );
                                    }
                                }
                            )
                        }
                        <form onSubmit={submitRecipeForm}>
                            <label htmlFor='recipeTitle'>Title:</label>
                            <input
                                type='text'
                                name='title'
                                id='recipeTitle'
                                value={editedRecipeData.title}
                                onChange={handleInputChange}
                            />

                            <label htmlFor='recipeDescription'>Description:</label>
                            <textarea
                                name='description' 
                                id='recipeDescription'
                                value={editedRecipeData.description}
                                onChange={handleInputChange}
                            >
                            </textarea>

                            <button disabled={submitDisabled} className='button button-green'>Add</button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
}