import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import Dialog from '@mui/material/Dialog';
import { useFormik } from "formik"
import * as Yup from "yup"

import { useUserInfo } from '../../Hooks/useAuthHooks'
import { CheckBox, TextInput } from '../../components/form'

import "./Auth.css"

export const LoginForm = (props) => {
    const [success, setSuccess] = useState(false);

    const { data: users, isError, error } = useUserInfo()

    const loginSchema = Yup.object({
        username: Yup.string()
            .required('Username is required'),
        password: Yup.string()
            .required('Enter your password')
    })

    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        validationSchema: loginSchema,
        onSubmit: (values) => {
            const user = users?.data.find((user) => user.username === values.username && user.password === values.password)
            user && setSuccess(!success)
            user && console.log('User logged in')
        }
    })

    if (isError) {
        return <h2>{error.message}</h2>
    }

    const {
        values,
        handleChange,
        handleSubmit,
        handleBlur,
        touched,
        errors
    } = formik

    return (
        <>
            <Dialog open={props.loginModal} onClose={props.handleLoginClose}>
                {
                    success ? (<Navigate to="/home" replace={true} />)
                        :
                        (
                            <div className='field'>
                                <div className='authField'>
                                    <div className='p-12'>

                                        <div className='authHead'>
                                            <h1>-LOGIN-</h1>
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
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                    />
                                                    {touched.username && errors.username ? <div className='error'>{errors.username}</div> : null}
                                                </div>

                                                <div className='form-field'>
                                                    <TextInput
                                                        textClass="authInput"
                                                        name="password"
                                                        placeholder="password"
                                                        type="password"
                                                        label="Password"
                                                        value={values.password}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                    />
                                                    {touched.password && errors.password ? <div className='error'>{errors.password}</div> : null}
                                                </div>

                                                {/* Remember me and forgot password */}
                                                <div className='remFor'>
                                                    <div>
                                                        <CheckBox name="rememberMe" type='checkbox'> Remember me</CheckBox>
                                                    </div>
                                                    <div>
                                                        <Link to={'/forgot-password'}>Forgot Password</Link>
                                                    </div>
                                                </div>

                                                <div className='authBtn'>
                                                    <button type='submit' className='pointer'> Login</button>
                                                </div>
                                            </form>

                                            <div>
                                                <Link to="/signup">Register</Link>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                }
            </Dialog>
        </>
    )
}
