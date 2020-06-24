import React, { useEffect, useState } from 'react'
import './RecipeList.scss';
import Header from '../Header/Header';
import axios from 'axios'
import { Link } from 'react-router-dom'


export default function RecipeList () {

    const initialrecipes = []

    const [ recipes, setRecipes ] = useState(initialrecipes)

    useEffect(() => {
        axios.get('https://secretfamilyrecipe3.herokuapp.com/') 
            .then(res => {
                const newRecipes = res.data
                setRecipes({...recipes, newRecipes})
            })
            .catch(err => console.log(err))
    }, [])


    return (
        <>
            <Header />
            <div className='RecipeList'>
                <div className='container'>
                    <div className='row'>
                        {recipes.map(recipe => {
                            return (
                                <div className='col-md-6 col-lg-4 RecipeList__recipe'>
                                    <Link to={`/recipes/${recipe.id}`}>
                                        <div className='RecipeList__image-wrapper'>
                                            <img src={recipe.img} alt={recipe.title} />
                                        </div>
                                    </Link>
                                    <h5>{recipe.title}</h5>
                                </div>
                            )
                        }) }
                        
                    </div>
                </div>
            </div>
        </>
    );
}