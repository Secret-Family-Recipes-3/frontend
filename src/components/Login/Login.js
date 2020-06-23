import React, { useEffect, useState } from 'react'
import './Login.scss';
import * as yup from 'yup'
import {loginSchema} from '../../schema/formSchema'


export default function Login(props) {
    const initialErrors = {
        username: '',
        password: ''
    }

    const initialFormValues = {
        username: '',
        password: ''
    }

    const [errors, setErrors] = useState(initialErrors)
    const [submitButton, setSubmitButton] = useState(true)
    const [formValue, setFormValue] = useState(initialFormValues) 




    const onChange = event => {
        const name = event.target.name
        const value = event.target.value
        
        // console.log(`${name}: ${value}`)

        yup.reach(loginSchema, name)
            .validate(value)
            .then(valid => {
                setErrors({...errors, [name]: ''})
                console.log({...valid})
            })
            .catch(err => {
                setErrors({...errors, [name]: err.errors[0]})
                console.log(errors)
            })


        setFormValue({...formValue, [name]: value})
    }

    useEffect(() => {
        loginSchema.isValid(formValue)
        .then(valid => {
            setSubmitButton(!valid)
        })
    })

    const submitLogin = event => {
        event.preventDefault()
        
        console.log(`username: ${formValue.username}, password: ${formValue.password}`)
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

                                {Object.keys(errors).map((item, key) => {
                                    if (errors[item]) {
                                        return (<p key={key} className='error'>{errors[item]}</p>)
                                }})}

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