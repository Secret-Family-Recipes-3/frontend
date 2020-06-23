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

    const initialFormValues = {
        username: '',
        password: '',
        password2: '',
        email: ''
    }

    const [errors, setErrors] = useState(initialErrors)
    const [submitButton, setSubmitButton] = useState(true)
    const [formValue, setFormValue] = useState(initialFormValues) 




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
                                        return (<p key={key} className='error'>{errors[item]}</p>)
                                }})}

                                <label htmlFor='username'>Username:</label>
                                <input name='username' value={formValue.username} type='text' id='username' onChange={onChange} />

                                <label htmlFor='email'>E-mail:</label>
                                <input name='email' value={formValue.email} type='email' id='email' onChange={onChange} />

                                <label htmlFor='password'>Password:</label>
                                <input name='password' value={formValue.password} type='password' id='password' onChange={onChange} />

                                <label htmlFor='password2'>Confirm Password:</label>
                                <input name='password2' value={formValue.password2} type='password' id='password2' onChange={onChange} />
                                

                                <button disabled={submitButton} className='button button-green'>Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}