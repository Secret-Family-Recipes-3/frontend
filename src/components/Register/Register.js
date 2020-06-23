import React, { useState, useEffect } from 'react';
import './Register.scss';
import * as yup from 'yup'
import {registerSchema} from '../../schema/formSchema'

export default function Register (props) {
    const initialErrors = {
        username: '',
        password: '',
        email: '',
        password2: ''
    }

    const [errors, setErrors] = useState(initialErrors)
    const [submitButton, setSubmitButton] = useState(true)
    const [formValue, setFormValue] = useState() 




    const onChange = event => {
        const name = event.target.name
        const fieldValue = event.target.value
        
        // console.log(`${name}: ${value}`)

        yup.reach(registerSchema, name)
            .validate(formValue)
            .then(valid => {
                setErrors({...errors, [name]: ''})
            })
            .catch(err => {
                setErrors({...errors, [name]: err.errors[0]})
            })


        setFormValue({...formValue, [name]: fieldValue})
    }

    useEffect(() => {
        registerSchema.isValid(formValue)
        .then(valid => {
            setSubmitButton(!valid)
        })
    },)

    const submitRegister = event => {
        event.preventDefault()
        
        console.log(`username: ${formValue.username}, password: ${formValue.password}`)
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

                                {Object.keys(errors).map((item, key) => {
                                    if (errors[item]) {
                                        return (<p key={key} className='error'>{item}</p>)
                                }})}

                                <label htmlFor='username'>Username:</label>
                                <input name='username' type='text' id='username' onChange={onChange} />
                                {errors.username.length > 0 ? (<p className="error">{errors.username}</p>) : null}

                                <label htmlFor='email'>E-mail:</label>
                                <input name='email' type='email' id='email' onChange={onChange} />
                                {errors.email.length > 0 ? (<p className="error">{errors.email}</p>) : null}

                                <label htmlFor='password'>Password:</label>
                                <input name='password' type='password' id='password' onChange={onChange} />
                                {errors.password.length > 0 ? (<p className="error">{errors.password}</p>) : null}

                                <label htmlFor='password2'>Password again:</label>
                                <input name='password2' type='password' id='password2' onChange={onChange} />
                                {errors.password2.length > 0 ? (<p className="error">{errors.password2}</p>) : null}

                                <button disabled={submitButton} className='button button-green'>Log In</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}