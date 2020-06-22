import React from 'react'

export default function Register(props) {
    const { onChange } = props

    return (
        <div>
            <div>
                <img src='http://placekitten.com/200/300' alt='Secret Family Recipe Logo' />
            </div>
            <form onSubmit=''>
                <h2>Register</h2>
                <label>Email:
                    <input name='email' type='text' onChange={onChange} />
                </label>
                <label>Password:
                    <input name='password' type='text' onChange={onChange} />
                </label>
                <button>Register</button>
            </form>
        </div>
    )
}