import * as yup from 'yup';


export const loginSchema = yup.object().shape({
    username: yup
        .string()
        .trim()
        .min(5, 'Username must be at least 5 characters')
        .max(256, 'Username must be fewer than 256 characters')
        .required('Username is required'),
    password: yup
        .string()
        .trim()
        .min(7, 'Minimum password length is 7 characters')
        .max(256, 'Password must be fewer than 256 characters')
        .required('Password is required')
});

export const registerSchema = yup.object().shape({
    username: yup
        .string()
        .min(5, 'Username must be at least 5 characters')
        .max(256, 'Username must be fewer than 256 characters')
        .required('Username is required'),
    email: yup
        .string()
        .required('Email is required')
        .max(256, 'Email must be fewer than 256 characters')
        .email(),
    password: yup
        .string()
        .min(7, 'Minimum password length is 7 characters')
        .max(256, 'Passoword must be fewer than 256 characters')
        .required('Password is required'),
    password2: yup
        .string()
    /*
    
    password2: yup
                .string()
                // .oneOf([yup.ref('password')], 'Both passwords need to be the same')
                .required()

    */
});

export const recipeAddSchema = yup.object().shape({
    title: yup
        .string()
        .min(5, 'Title must be at least 5 characters')
        .max(256, 'Title must be fewer than 256 characters')
        .required('Title is required'),
    description: yup
        .string()
        .min(5, 'Description must be at least 10 characters')
        .required('Description is required')

});