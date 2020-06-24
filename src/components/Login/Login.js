import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import * as yup from 'yup'

import {loginSchema} from '../../schema/formSchema'
import './Login.scss';


export default function Login(props) {
    const { setLoggedIn } = props;

    const initialErrors = {
        username: '',
        password: '',
        server: ''
    };

    const initialFormValues = {
        username: '',
        password: ''
    };

    const [errors, setErrors] = useState(initialErrors);
    const [submitButton, setSubmitButton] = useState(true);
    const [formValue, setFormValue] = useState(initialFormValues);

    const LOGIN_URL = 'https://secretfamilyrecipe3.herokuapp.com/api/login';

    const { push } = useHistory();


    const onChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        
        // console.log(`${name}: ${value}`)

        yup.reach(loginSchema, name)
            .validate(value)
            .then(valid => {
                setErrors({...errors, [name]: ''});
            })
            .catch(err => {
                setErrors({...errors, [name]: err.errors[0]});

                // console.log(errors);
            })


        setFormValue({...formValue, [name]: value})
    }

    useEffect(() => {
        loginSchema.isValid(formValue)
            .then(valid => {
                setSubmitButton(!valid);
            })
    }, [formValue]);

    const submitLogin = event => {
        event.preventDefault();
        
        // Send username and password to the server

        axios.post(LOGIN_URL, formValue)
            .then(response => {
                // Save the token in local storage
                localStorage.setItem('loginToken', response.data.token);

                // Set the state in 'App' component
                setLoggedIn(true);
                
                // Redirect to the home page.
                push('/');
            })
            .catch(error => {

                // Display an error message if something went wrong

                setErrors({
                    ...errors,
                    server: "Couldn't log in. Please try again."
                });

                console.log(error);
            });
    }


    return (
        <div className='Login'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <a href='/' className='Login__logo'>Home</a>
                    </div>
                    <div className='col-md-6'>
                        <div className='box'>
                            <form onSubmit={submitLogin}>
                                <h4>Log In:</h4>

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

                                <label htmlFor='username'>Username:</label>
                                <input name='username' value={formValue.username} type='text' id='username' onChange={onChange} />
                                

                                <label htmlFor='password'>Password:</label>
                                <input name='password' value={formValue.password} type='password' id='password' onChange={onChange} />

                                <button disabled={submitButton} className='button button-green'>Log In</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}