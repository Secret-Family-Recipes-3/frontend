import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import * as yup from 'yup'

import './Register.scss';
import {registerSchema} from '../../schema/formSchema'

export default function Register (props) {
    const { setLoggedIn } = props;

    const initialErrors = {
        username: '',
        password: '',
        email: '',
        // password2: '',
        server: ''
    }

    const initialFormValues = {
        username: '',
        password: '',
        // password2: '',
        email: ''
    }

    const [errors, setErrors] = useState(initialErrors)
    const [submitButton, setSubmitButton] = useState(true)
    const [formValue, setFormValue] = useState(initialFormValues) 

    const REGISTER_URL = 'https://secretfamilyrecipe3.herokuapp.com/api/register';

    const { push } = useHistory();


    const onChange = event => {
        const name = event.target.name
        const value = event.target.value
        
        console.log(`${name}: ${value}`)

        yup.reach(registerSchema, name)
            .validate(value)
            .then(valid => {
                setErrors({...errors, [name]: ''})
            })
            .catch(err => {
                setErrors({...errors, [name]: err.errors[0]})
            })

        setFormValue({...formValue, [name]: value})
    }

    useEffect(() => {
        registerSchema.isValid(formValue)
        .then(valid => {
            setSubmitButton(!valid)
        })
    }, [formValue]);

    const submitRegister = event => {
        event.preventDefault();
        
        // Send data to the server

        axios.post(REGISTER_URL, formValue)
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
                    server: "Couldn't register. Please try again."
                });

                console.log(error);
            });
    }
    return (
        <div className='Register'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <a href='/' className='Register__logo'>Home</a>
                    </div>
                    <div className='col-md-6'>
                        <div className='box'>
                            <form onSubmit={submitRegister}>
                                <h4>Register:</h4>

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

                                <label htmlFor='email'>E-mail:</label>
                                <input name='email' value={formValue.email} type='email' id='email' onChange={onChange} />

                                <label htmlFor='password'>Password:</label>
                                <input name='password' value={formValue.password} type='password' id='password' onChange={onChange} />

                                {   /*
                                    <label htmlFor='password2'>Confirm Password:</label>
                                    <input name='password2' value={formValue.password2} type='password' id='password2' onChange={onChange} />
                                    */
                                } 

                                <button disabled={submitButton} className='button button-green'>Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}