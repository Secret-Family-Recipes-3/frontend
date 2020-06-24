import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import * as yup from 'yup'

import './Register.scss';
import {registerSchema} from '../../schema/formSchema'

export default function Register (props) {
    const { setLoggedIn } = props;

    const push = useHistory();

    const initialErrors = {
        username: '',
        password: '',
        email: '',
        // password2: '',
        server: ''
    }

    const initialformValues = {
        username: '',
        password: '',
        // password2: '',
        email: ''
    }

    const initialBlurValues = {
        username: false,
        password: false,
        password2: false,
        email: false
    }


    const [blurred, hasBlurred] = useState(initialBlurValues)

    const [errors, setErrors] = useState(initialErrors)
    const [submitButton, setSubmitButton] = useState(true)
    const [formValues, setFormValues] = useState(initialformValues) 

    const REGISTER_URL = 'https://secretfamilyrecipe3.herokuapp.com/api/register';

    const setBlur = event => {
        const targetName = event.target.name 
        hasBlurred({...blurred, [targetName]: true})
    }

    // const onChange = async event => {
    //     const name = event.target.name
    //     const value = event.target.value
        
    //     // console.log(`${name}: ${value}`)
    //     //set state
    //     setFormValues({...formValues, [name]: value})

    //     //the state available to this block lags behind by a keystroke
    //     // modeling what the state will be on render
    //     const formValuesModel = {
    //         ...formValues, [name]: value
    //     }
        
    //     //reset error state to initial
    //     setErrors(initialErrors)

    //     try{
    //         // is the form data valid - if not, initialErrors persists
    //         // default behavior is to return only a single error - override with abortEarly: false
    //         await registerSchema.validate(formValuesModel, {abortEarly: false})
    //     }
    //     catch(err){
    //         console.log(err)
    //         //make sure it's the right type of error
    //         if (err.name === 'ValidateionError') {
    //             //create synchronous model of state
    //             let errorModel = {...initialErrors}
    //             console.log(errorModel)
    //             //iterate through the errors returned
    //             err.inner.forEach(err => {
    //                 errorModel = {
    //                     ...errorModel,
    //                     [err.path]: [...errorModel[err.path], err.message]
    //                 }
    //             })
    //             setErrors(errorModel)
    //         }
    //     }
    // }

    const onChange = event => {
        const name = event.target.name
        const value = event.target.value
        
        // console.log(`${name}: ${value}`)

        yup.reach(registerSchema, name)
            .validate(value)
            .then(valid => {
                setErrors({...errors, [name]: ''})
                console.log({...valid})
            })
            .catch(err => {
                setErrors({...errors, [name]: err.errors[0]})
                console.log(errors)
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
                setErrors({...errors, [errors.password2]: 'Passwords must match'})
            }
            
        })
    }, [formValues])


    const submitRegister = event => {
        event.preventDefault();
        
        console.log(`username: ${formValues.username}, password: ${formValues.password}`)

        axios.post(REGISTER_URL, formValues)
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
                                <input onBlur={setBlur} name='username' value={formValues.username} type='text' id='username' onChange={onChange} />
                                {/* {blurred.username && errors.username.map( err => {
                                    return <p>{err}</p>
                                })} */}

                                <label htmlFor='email'>E-mail:</label>
                                <input onBlur={setBlur} name='email' value={formValues.email} type='email' id='email' onChange={onChange} />
                                {/* {blurred.email && errors.email.map( err => {
                                    return <p>{err}</p>
                                })} */}

                                <label htmlFor='password'>Password:</label>
                                <input onBlur={setBlur} name='password' value={formValues.password} type='password' id='password' onChange={onChange} />
                                {/* {blurred.password && errors.password.map( err => {
                                    return <p>{err}</p>
                                })} */}

                                <label htmlFor='password2'>Confirm Password:</label>
                                <input onBlur={setBlur} name='password2' value={formValues.password2} type='password' id='password2' onChange={onChange} />
                                {/* {blurred.password2 && errors.password2.map( err => {
                                    return <p>{err}</p>
                                })} */}

                                <button disabled={submitButton} className='button button-green'>Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}