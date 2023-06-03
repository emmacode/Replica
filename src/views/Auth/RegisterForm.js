import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import { Form } from '../../components/Form/form';

import "./Auth.css"
import { useAddNewUser } from '../../Hooks/useAuthHooks';

export const RegisterForm = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('')

    const { mutate: addUser } = useAddNewUser()

    const handleNewuser = (e) => {
        e.preventDefault();
        const newUser = { username, email, password, phone };
        addUser(newUser);
        setUsername('')
        setEmail('');
        setPhone('');
        setPassword('');
    }

    return (
        <>
            <div className='field'>
                <div className='authField'>
                    <div className='authIn'>

                        <div className='authHead'>
                            <h1>-SIGN UP-</h1>
                        </div>

                        <div className='authInForm'>

                            <form onSubmit={handleNewuser}>
                                <div className='form-field'>
                                    <Form
                                        className="authInput"
                                        //name="login"
                                        placeholder="Username"
                                        value={username.toLowerCase()}
                                        type='text'
                                        onChange={(e) => setUsername(e.target.value)}
                                        labelTitle="Email"
                                    />
                                </div>

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
                                        value={password}
                                        type="password"
                                        labelTitle="Password"
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>

                                <div className='authBtn'>
                                    <button className='pointer'>Register</button>
                                </div>
                            </form>

                            <div>
                                <Link to="/login">Login</Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
