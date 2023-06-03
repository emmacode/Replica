import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'

import { useUserInfo } from '../../Hooks/useAuthHooks'
import { Form } from '../../components/Form/form'

import "./Auth.css"

export const LoginForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [success, setSuccess] = useState(false);

    const { data: users, isError, error } = useUserInfo()
    //console.log(data?.data, 'user')

    const handleLogin = (e) => {
        e.preventDefault();
        console.log(username, password)
        const user = users?.data.find((user) => user.username === username && user.password === password)
        user && setSuccess(!success)
        user && console.log('User logged in')
        setUsername('');
        setPassword('')
    }

    if (isError) {
        return <h2>{error.message}</h2>
    }

    return (
        <>
            {
                success ? (<Navigate to="/home" replace={true} />)
                    :
                    (
                        <div className='field'>
                            <div className='authField'>
                                <div className='authIn'>

                                    <div className='authHead'>
                                        <h1>-LOGIN-</h1>
                                    </div>

                                    <div className='authInForm'>

                                        <form onSubmit={handleLogin}>
                                            <div className='form-field'>
                                                <Form
                                                    className="authInput"
                                                    //name="login"
                                                    placeholder="Email, Username or Phone"
                                                    value={username.toLowerCase()}
                                                    type='text'
                                                    onChange={(e) => setUsername(e.target.value)}
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
                                                <button className='pointer'> Login</button>
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
        </>
    )
}
