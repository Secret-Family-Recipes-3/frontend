import React from 'react'
import './Login.scss';


export default function Login(props) {
    const { onChange, submitLogin } = props

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

                                <label htmlFor='username'>Username:</label>
                                <input name='username' type='text' id='username' onChange={onChange} />

                                <label htmlFor='password'>Password:</label>
                                <input name='password' type='password' id='password' onChange={onChange} />

                                <button className='button button-green'>Log In</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}