import React, { useState } from 'react'

import { Form } from '../../components/Form/form';

import "./Auth.css"
import { Link } from 'react-router-dom';

export const RegisterForm = () => {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [regPassword, setRegPassword] = useState('')

    return (
        <>
            <div className='field'>
                <div className='authField'>
                    <div className='authIn'>

                        <div className='authHead'>
                            <h1>-SIGN UP-</h1>
                        </div>

                        <div className='authInForm'>

                            <form>
                                <div className='form-field'>
                                    <Form
                                        className="authInput"
                                        //name="login"
                                        placeholder="Email"
                                        value={email}
                                        type='email'
                                        onChange={(e) => setEmail(e.target.value)}
                                        labelTitle="Email"
                                    />
                                </div>

                                <div className='form-field'>
                                    <Form
                                        className="authInput"
                                        //name="phone"
                                        placeholder="Phone number"
                                        value={phone}
                                        type="phone"
                                        labelTitle="Phone number"
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                </div>

                                <div className='form-field'>
                                    <Form
                                        className="authInput"
                                        //name="password"
                                        placeholder="password"
                                        value={regPassword}
                                        type="password"
                                        labelTitle="Password"
                                        onChange={(e) => setRegPassword(e.target.value)}
                                    />
                                </div>

                                <div className='authBtn'>
                                    <Link className='pointer' to={'/home'}>Register</Link>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
