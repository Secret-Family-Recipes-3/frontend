import React, { useState, useEffect } from 'react';
import './RecipePage.scss';
import Header from '../Header/Header';
import { useParams } from 'react-router-dom';
import authAxios from '../../utils/authAxios';
import RecipeDetails from '../RecipeDetails/RecipeDetails';
import RecipeEdit from '../RecipeEdit/RecipeEdit';

export default function RecipePage (props) {
    const { id } = useParams();

    const [recipe, setRecipe] = useState();
    const [error, setError] = useState();
    const [pageMode, setPageMode] = useState('default');

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
        <div className='RecipePage'>
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

            { recipe && pageMode === 'edit' &&
                <RecipeEdit 
                    recipe={recipe}
                    setPageMode={setPageMode}
                    setRecipe={setRecipe}
                />
            }
            
            { recipe && pageMode === 'default' &&
                <RecipeDetails recipe={recipe} setPageMode={setPageMode} />
            }
        </div>
    );
}