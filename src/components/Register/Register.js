import React from 'react';
import './Register.scss';

export default function Register (props) {
    const { onChange } = props;

    return (
        <div className='Register'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <a href='/' className='Register__logo'>Home</a>
                    </div>
                    <div className='col-md-6'>
                        <div className='box'>
                            <form>
                                <h4>Register:</h4>

                                <label htmlFor='username'>Username:</label>
                                <input name='username' type='text' id='username' onChange={onChange} />

                                <label htmlFor='email'>E-mail:</label>
                                <input name='email' type='email' id='email' onChange={onChange} />

                                <label htmlFor='password'>Password:</label>
                                <input name='password' type='password' id='password' onChange={onChange} />

                                <label htmlFor='password2'>Password again:</label>
                                <input name='password2' type='password' id='password2' onChange={onChange} />

                                <button className='button button-green'>Log In</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}