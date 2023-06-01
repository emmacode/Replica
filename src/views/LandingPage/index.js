import React, { useState } from 'react'

import "./index.css"
import { Link } from 'react-router-dom'
import { Modal } from '../../components/Modal/modal'
import { Form } from '../../components/Form/form'

export const LandingPage = () => {
    const [loginValue, setLoginValue] = useState('')
    const [password, setPassword] = useState('')
    const [loginModal, setLoginModal] = useState(false);
    const [regModal, setRegModal] = useState(false);
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('')

    const handleLoginModal = () => {
        setLoginModal(!loginModal)
    }

    const handleRegModal = () => {
        setRegModal(!regModal)
    }

    const handleChange = setState => (e) => {
        e.preventDefault();
        setState(e.target.value)
    }

    return (
        <>
            <div className='landingPage'>
                <div className='landingPage-content'>
                    <h1>Welcome to Replica</h1>
                    <div className='landingPage-link'>
                        <Link className='login pointer' onClick={handleLoginModal}>Login</Link>
                        <Link className='regBtn pointer' onClick={handleRegModal} >Register</Link>
                    </div>
                </div>
                {/* Modal for Login */}
                <Modal
                    className={loginModal ? 'modal modalOpen' : 'modal'}
                    modalContentClass="landingPage-form"
                    handleClose={handleLoginModal}
                >
                    <div>
                        <Form
                            className="loginInput"
                            //name="login"
                            placeholder="Email, Username or Phone"
                            value={loginValue}
                            type='text'
                            onChange={handleChange(setLoginValue)}
                            labelTitle="Email, Username or Phone"
                        />
                        <Form
                            className="loginInput"
                            name="password"
                            placeholder="password"
                            value={password}
                            type="password"
                            labelTitle="Password"
                        />
                        <div className='loginBtn'>
                            <button className='pointer'>Login</button>
                        </div>
                    </div>
                </Modal>
                {/* End Login modal */}

                {/* Register modal form */}
                <Modal
                    className={regModal ? 'modal modalOpen' : 'modal'}
                    modalContentClass="landingPage-form"
                    handleClose={handleRegModal}
                >
                    <div>
                        <Form
                            className="loginInput"
                            //name="login"
                            placeholder="Email"
                            value={email}
                            type='email'
                            onChange={handleChange(setEmail)}
                            labelTitle="Email"
                        />
                        <Form
                            className="loginInput"
                            //name="phone"
                            placeholder="Phone number"
                            value={phone}
                            type="phone"
                            labelTitle="Phone number"
                            onChange={handleChange(setPhone)}
                        />
                        <Form
                            className="loginInput"
                            //name="password"
                            placeholder="password"
                            value={password}
                            type="password"
                            labelTitle="Password"
                            onChange={handleChange(setPassword)}
                        />
                        <div className='loginBtn'>
                            <button className='pointer'>Register</button>
                        </div>
                    </div>
                </Modal>
                {/* End Register modal form */}
            </div>
        </>
    )
}
