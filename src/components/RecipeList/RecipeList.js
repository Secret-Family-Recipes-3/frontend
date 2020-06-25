import React, { useEffect, useState } from 'react';
import './RecipeList.scss';
import Header from '../Header/Header';
import MainHeading from '../MainHeading/MainHeading';
// import axios from 'axios';
import authAxios from '../../utils/authAxios';
import jwt from 'jsonwebtoken';
import RecipeTile from '../RecipeTile/RecipeTile';


export default function RecipeList () {

    const initialrecipes = [];

    const [ recipes, setRecipes ] = useState(initialrecipes);

    useEffect(() => {
        // axios.get('https://secretfamilyrecipe3.herokuapp.com/') 
        //     .then(res => {
        //         const newRecipes = res.data;
        //         setRecipes(newRecipes);
        //     })
        //     .catch(err => console.log(err));
        const tokenInfo = jwt.decode(localStorage.getItem('loginToken'));
        authAxios().get('/api/recipes', tokenInfo)
            .then(res => {
                const newRecipes = res.data;
                setRecipes(newRecipes);
            })
            .catch(err => console.log(err));
    }, [])


    return (
        <>
            <Header />
            <MainHeading heading='All recipes' />

            <div className='RecipeList'>
                <div className='container'>
                    <div className='row'>

                        {recipes && recipes.map((recipe) => {
                            return <RecipeTile key={recipe.id} recipe={recipe} />
                        }) }
                        
                    </div>
                </div>
            </div>
        </>
    );
}