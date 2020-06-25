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

    const [recipes, setRecipes] = useState(initialrecipes);
    const [filteredRecipes, setFilteredRecipes] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    function handleSearchChange (event) {
        setSearchQuery(event.target.value);
    }

    useEffect(() => {
        const results = recipes.filter(recipe => {
            return (recipe.title.toLowerCase()).includes(searchQuery.toLowerCase());
        });

        setFilteredRecipes(results);

    }, [searchQuery]);

    useEffect(() => {
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
                        <div className='col-md-12'>
                        {recipes &&
                            <form>
                                <input
                                    type='search'
                                    placeholder='Search...'
                                    value={searchQuery}
                                    onChange={handleSearchChange}
                                />
                            </form>
                        }
                        </div>
                    </div>
                    <div className='row'>

                        {recipes && searchQuery === '' && recipes.map((recipe) => {
                            return <RecipeTile key={recipe.id} recipe={recipe} />
                        }) }

                        {searchQuery !== '' && filteredRecipes.map((recipe) => {
                            return <RecipeTile key={recipe.id} recipe={recipe} />
                        }) }
                        
                    </div>
                </div>
            </div>
        </>
    );
}