import React, { useState, useEffect } from 'react'
import './RecipeDetails.scss';
import Header from '../Header/Header';
import MainHeading from '../MainHeading/MainHeading';
import { useParams } from 'react-router-dom';
import authAxios from '../../utils/authAxios';

export default function RecipeDetails (props) {
    const { id } = useParams();

    const [recipe, setRecipe] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        authAxios().get(`/api/recipes/${id}`)
            .then(res => {
                setRecipe(res.data);
            })
            .catch(error => {
                setError('Could not load the recipe.');
                console.log(error);
            });
    }, []);

    return (
        <div className='RecipeDetails'>
            <Header />
            { error &&
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <p className="error">{ error }</p>
                        </div>
                    </div>
                </div>
            }
            { recipe &&
                <>
                    <MainHeading heading={recipe.title} />

                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <p>
                                    {recipe.details}
                                </p>
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
                </>
            }
        </div>
    );
}