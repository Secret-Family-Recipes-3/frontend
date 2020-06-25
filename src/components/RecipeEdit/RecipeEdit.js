import React, { useState, useEffect } from 'react';
import MainHeading from '../MainHeading/MainHeading';
import { recipeSchema } from '../../schema/formSchema';
import * as yup from 'yup';
import authAxios from '../../utils/authAxios';

export default function RecipeEdit (props) {
    const { recipe, setRecipe, setPageMode } = props;

    const initialErrors = {
        title: '',
        description: ''
    };

    const initialRecipeData = {
        title: recipe.title,
        description: recipe.description
    };

    const [editedRecipeData, setEditedRecipeData] = useState(initialRecipeData);

    const [errors, setErrors] = useState(initialErrors);
    const [submitDisabled, setSubmitDisabled] = useState(false);

    function submitRecipeForm (event) {
        event.preventDefault();
        
        const requestData = {
            ...editedRecipeData,
            created_by: recipe.created_by,
            private: recipe.private,
            id: recipe.id,
        }

        authAxios().put(`/api/recipes/${recipe.id}`, requestData)
            .then(response => {
                setEditedRecipeData(initialRecipeData);
                setRecipe(response.data);
                setPageMode('default');
            })
            .catch(error => {
                console.log('Could not add the recipe');
            });
    }


    function handleInputChange (event) {
        const fieldName = event.target.name;
        const fieldValue = event.target.value;

        setEditedRecipeData({
            ...editedRecipeData,
            [fieldName]: fieldValue
        });

        yup.reach(recipeSchema, fieldName)
            .validate(fieldValue)
            .then(valid => {
                setErrors({...errors, [fieldName]: ''});
            })
            .catch(err => {
                setErrors({...errors, [fieldName]: err.errors[0]});
                // console.log(errors);
            })
    }

    useEffect(() => {
        recipeSchema.isValid(editedRecipeData)
            .then(valid => {
                setSubmitDisabled(!valid);
            })
    }, [editedRecipeData]);

    return (
        <>
            <MainHeading heading='Edit the recipe' />

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

                            <button disabled={submitDisabled} className='button button-green'>Save</button>
                            <button onClick={() => setPageMode('default')} className='button'>Cancel</button>
                        </form>
                    </div>
                </div>

            </div>
        </>
    );
}