import React, { useState } from 'react'

import { Form } from '../../components/Form/form'

import "./Auth.css"
import { Link } from 'react-router-dom'

export const LoginForm = () => {
    const [loginValue, setLoginValue] = useState('')
    const [password, setPassword] = useState('')

    return (
        <>
            <div className='field'>
                <div className='authField'>
                    <div className='authIn'>

                        <div className='authHead'>
                            <h1>-LOGIN-</h1>
                        </div>

                        <div className='authInForm'>

                            <form>
                                <div className='form-field'>
                                    <Form
                                        className="authInput"
                                        //name="login"
                                        placeholder="Email, Username or Phone"
                                        value={loginValue}
                                        type='text'
                                        onChange={(e) => setLoginValue(e.target.value)}
                                        labelTitle="Email, Username or Phone"
                                    />
                                </div>

                                <div className='form-field'>
                                    <Form
                                        className="authInput"
                                        name="password"
                                        placeholder="password"
                                        value={password}
                                        type="password"
                                        labelTitle="Password"
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>

                                {/* Remember me and forgot password */}
                                <div className='remFor'>
                                    <div>
                                        <input type='checkbox' /> Remember me
                                    </div>
                                    <div>
                                        <Link to={'/forgot-password'}>Forgot Password</Link>
                                    </div>
                                </div>

                                <div className='authBtn'>
                                    <Link className='pointer' to={'/home'}>Login</Link>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
