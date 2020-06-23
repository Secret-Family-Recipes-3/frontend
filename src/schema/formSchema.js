import * as yup from 'yup'

export const loginSchema = yup.object().shape({
    username: yup
        .string()
        .min(5, 'Username must be at least 5 characters'),
        // .required('Username is required'),
    password: yup
        .string()
        .min(7, 'Minimum password length is 7 characters')
        .required('Password is required')
})

export const registerSchema = yup.object().shape({
    username: yup
        .string()
        .min(5, 'Username must be at least 5 characters')
        .required('Username is required'),
    password: yup
        .string()
        .min(7, 'Minimum password length is 7 characters')
        .required('Password is required'),
    email: yup
        .string()
        .required('Email is required')
        .email(),
    password2: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
})