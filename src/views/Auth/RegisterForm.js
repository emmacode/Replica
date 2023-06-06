import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { TextInput } from '../../components/form';

import "./Auth.css"
import { useAddNewUser } from '../../Hooks/useAuthHooks';

export const RegisterForm = (props) => {

    const { mutate: addUser } = useAddNewUser()

    // min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.
    const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    const registerSchema = Yup.object({
        username: Yup.string()
            .required('Username is required'),
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
        phone: Yup.string()
            .matches(phoneRegExp, 'phone number is not valid')
            .required('phone number is required'),
        password: Yup.string()
            .matches(passwordRules, 'Please create a stronger password')
            .required('Enter password'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref("password"), null], 'password must match')
            .min(8, 'Password is too short - should be 8 characters minimum')
            .required('Confirm password')
    })

    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            phone: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema: registerSchema,
        onSubmit: (values) => {
            const { username, email, phone, password } = values;
            const newUser = { username, email, phone, password };
            addUser(newUser);
        }
    })

    const {
        values,
        handleChange,
        handleSubmit,
        handleBlur,
        touched,
        errors
    } = formik;

    return (
        <>
            <Dialog open={props.signupModal} onClose={props.handleSignupClose}>
                <div className='field'>
                    <div className='authField'>
                        <div className='p-12'>

                            <div className='authHead'>
                                <h1>-SIGN UP-</h1>
                            </div>

                            <div className='authInForm'>

                                <form onSubmit={handleSubmit}>
                                    <div className='form-field'>
                                        <TextInput
                                            textClass="authInput"
                                            name="username"
                                            placeholder="Username"
                                            type='text'
                                            label="Username"
                                            value={values.username}
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                        />
                                        {touched.username && errors.username ? <div className='error'>{errors.username}</div> : null}
                                    </div>

                                    <div className='form-field'>
                                        <TextInput
                                            textClass="authInput"
                                            name="email"
                                            placeholder="Email"
                                            type='email'
                                            label="Email"
                                            value={values.email}
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                        />
                                        {touched.email && errors.email ? <div className='error'>{errors.email}</div> : null}
                                    </div>

                                    <div className='form-field'>
                                        <TextInput
                                            textClass="authInput"
                                            name="phone"
                                            placeholder="Phone number"
                                            type="phone"
                                            label="Phone number"
                                            value={values.phone}
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                        />
                                        {touched.phone && errors.phone ? <div className='error'>{errors.phone}</div> : null}
                                    </div>

                                    <div className='form-field'>
                                        <TextInput
                                            textClass="authInput"
                                            name="password"
                                            placeholder="password"
                                            type="password"
                                            label="Password"
                                            value={values.password}
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                        />
                                        {touched.password && errors.password ? <div className='error'>{errors.password}</div> : null}
                                    </div>

                                    <div className='form-field'>
                                        <TextInput
                                            textClass="authInput"
                                            name="confirmPassword"
                                            placeholder="confirm password"
                                            type="password"
                                            label="Confirm Password"
                                            value={values.confirmPassword}
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                        />
                                        {touched.confirmPassword && errors.confirmPassword ? <div className='error'>{errors.confirmPassword}</div> : null}
                                    </div>

                                    <div className='authBtn'>
                                        <button type="submit" className='pointer'>Register</button>
                                    </div>
                                </form>

                                <div>
                                    <Link to="/login">Login</Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </Dialog>
        </>
    )
}
