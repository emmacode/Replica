import React, { useState } from 'react'
import Dialog from '@mui/material/Dialog';
import { DialogActions } from '@mui/material';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';

import { useFormik } from 'formik'
import * as Yup from 'yup'

import { TextInput } from '../../components/form';

import "./Auth.css"
import { useAddNewUser, useUserInfo } from '../../Hooks/useAuthHooks';
import { AlertBox } from '../../components/Alert';

export const RegisterForm = (props) => {
    const [usernameError, setUsernameError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [alertMsg, setAlertMsg] = useState(false);

    //get existing user data
    const { data: users } = useUserInfo()
    //console.log(users?.data, 'user')

    const { mutate: addUser } = useAddNewUser()

    // min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.
    const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
    //const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    const phoneRegExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/

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
            .min(8, 'should be 8 characters minimum')
            .matches(passwordRules, 'At least 1 upper case, lower case and digit')
            .required('Enter password'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref("password"), null], 'password do not match')
            .min(8, 'should be 8 characters minimum')
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
        onSubmit: (values, { resetForm }) => {
            const { username, email, phone, password } = values;
            const newUser = { username, email, phone, password };
            const findUsernames = users?.data.find((findUsername) => findUsername.username === username);
            const findEmails = users?.data.find((findEmail) => findEmail.email === email)
            if (findUsernames) {
                setUsernameError('Username taken')
                console.log('username exist')
            } else if (findEmails) {
                setEmailError('Email exists')
                console.log('email exist')
            } else {
                addUser(newUser)
                console.log('Account created')
            }
            resetForm({ values: '' })
        }
    })

    const handleAlertClose = () => {
        setAlertMsg(false)
    }

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
            {alertMsg &&
                <AlertBox open={alertMsg} onClose={handleAlertClose}>
                    Account created
                </AlertBox>
            }
            <Dialog open={props.signupModal}>
                <div className='field'>
                    <div className='authField'>
                        <DialogActions>
                            <Button onClick={props.handleSignupClose} sx={{ color: "#fff" }}><CloseIcon /></Button>
                        </DialogActions>
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
                                            value={values.username.toLowerCase()}
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                        />
                                        {touched.username && errors.username ? <div className='error'>{errors.username}</div> : null}
                                        <div className='error'>{usernameError}</div>
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
                                        <div className='error'>{emailError}</div>
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

                            </div>
                        </div>
                    </div>
                </div>
            </Dialog>
        </>
    )
}
