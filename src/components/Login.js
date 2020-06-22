import React from 'react'


export default function Login(props) {
    const { onChange, submitLogin } = props

    return (
        <div>
            <div>
                <img src='http://placekitten.com/200/300' alt='Secret Family Recipe Logo' />
            </div>
            <form onSubmit={submitLogin}>
                <h2>Login</h2>
                <label>Email:
                    <input name='email' type='text' onChange={onChange} />
                </label>
                <label>Password:
                    <input name='password' type='text' onChange={onChange} />
                </label>
                <button>Login</button>
            </form>
        </div>
    )
}