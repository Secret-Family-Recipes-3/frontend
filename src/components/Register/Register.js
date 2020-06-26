import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import * as yup from 'yup'

import './Register.scss';
import {registerSchema} from '../../schema/formSchema'

export default function Register (props) {
    const { setLoggedIn } = props;

    const { push } = useHistory();

    const initialErrors = {
        username: '',
        password: '',
        email: '',
        password2: '',
        server: ''
    }

    const initialformValues = {
        username: '',
        password: '',
        password2: '',
        email: ''
    }

    const [errors, setErrors] = useState(initialErrors);
    const [submitButton, setSubmitButton] = useState(true);
    const [formValues, setFormValues] = useState(initialformValues) ;

    const REGISTER_URL = 'https://sfr-backend.herokuapp.com/api/auth/register';


    const onChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        
        // console.log(`${name}: ${value}`)

        yup.reach(registerSchema, name)
            .validate(value)
            .then(valid => {
                setErrors({...errors, [name]: ''});
            })
            .catch(err => {
                // debugger
                setErrors({...errors, [name]: err.errors[0]});
            //     console.log(err)
            //     console.log(errors);
            })


        setFormValues({...formValues, [name]: value})
    }

    useEffect(() => {
        registerSchema.isValid(formValues)
        .then(valid => {
            if(formValues.password === formValues.password2) {
                setSubmitButton(!valid)
                setErrors({...errors, [errors.password2]: ''})
            } else {
                //this is resetting error state to empty strings for all other properties 
                setErrors({...errors, [errors.password2]: 'Passwords must match'})
            }
            
        })
    }, [formValues.password2 || formValues.password])


    const submitRegister = event => {
        event.preventDefault();
        
        // console.log(`username: ${formValues.username}, password: ${formValues.password}`)

        const requestData = {
            username: formValues.username,
            email: formValues.email,
            password: formValues.password
        };

        axios.post(REGISTER_URL, requestData)
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
                                <input name='username' value={formValues.username} type='text' id='username' onChange={onChange} />

                                <label htmlFor='email'>E-mail:</label>
                                <input name='email' value={formValues.email} type='email' id='email' onChange={onChange} />

                                <label htmlFor='password'>Password:</label>
                                <input name='password' value={formValues.password} type='password' id='password' onChange={onChange} />

                                <label htmlFor='password2'>Confirm Password:</label>
                                <input name='password2' value={formValues.password2} type='password' id='password2' onChange={onChange} />

                                <button disabled={submitButton} className='button button-green'>Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}