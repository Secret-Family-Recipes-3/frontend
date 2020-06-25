import React, { useEffect, useState } from 'react';
import './RecipeList.scss';
import Header from '../Header/Header';
import MainHeading from '../MainHeading/MainHeading';
import { Link } from 'react-router-dom';
// import axios from 'axios';
import authAxios from '../../utils/authAxios';
import jwt from 'jsonwebtoken';
import RecipeTile from '../RecipeTile/RecipeTile';


export default function RecipeList () {

    // const initialrecipes = [{
    //     title: 'Grandmas World Famous Cookies',
    //     img: 'https://static8.depositphotos.com/1068095/910/i/450/depositphotos_9100822-stock-photo-chocolate-chip-cookie.jpg',
    //     id: '1'
    // }];
    
    const initialrecipes = [];
    // const defaultImg = 'https://images.unsplash.com/photo-1546250683-afa23f23dde1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80'

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

                        {recipes && recipes.map((recipe, index) => {
                            return <RecipeTile key={index} recipe={recipe} />
                        }) }
                        
                    </div>
                </div>
            </div>
        </>
    );
}