import React, { useEffect, useState } from 'react'
import './RecipeList.scss';
import Header from '../Header/Header';
import MainHeading from '../MainHeading/MainHeading';
import { Link } from 'react-router-dom';
import axios from 'axios'

export default function RecipeList () {

    const initialrecipes = [{
        title: 'Grandmas World Famous Cookies',
        img: 'https://static8.depositphotos.com/1068095/910/i/450/depositphotos_9100822-stock-photo-chocolate-chip-cookie.jpg',
        id: '1'
    }];

    const [ recipes, setRecipes ] = useState(initialrecipes);

    useEffect(() => {
        /*
        axios.get('https://secretfamilyrecipe3.herokuapp.com/') 
            .then(res => {
                const newRecipes = res.data;
                setRecipes(newRecipes);
            })
            .catch(err => console.log(err));
        */
    }, [])


    return (
        <>
            <Header />
            <MainHeading heading='All recipes' />

            <div className='RecipeList'>
                <div className='container'>
                    <div className='row'>
                        {recipes && recipes.map(recipe => {
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