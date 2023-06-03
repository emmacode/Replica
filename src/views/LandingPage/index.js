import React from 'react'
import { Link } from 'react-router-dom'

import "./index.css"
import { LoginForm } from '../Auth/LoginForm'
import { RegisterForm } from '../Auth/RegisterForm'
//import { Modal } from '../../components/Modal/modal'

export const LandingPage = () => {
    const [loginModal, setLoginModal] = React.useState(false);
    const [signupModal, setSignupModal] = React.useState(false);
    const handleLoginModal = () => setLoginModal(true);
    const handleLoginClose = () => setLoginModal(false);

    const handleSignupModal = () => setSignupModal(true);
    const handleSignupClose = () => setSignupModal(false);

    return (
        <>
            <div className='landingPage'>
                <div className='landingPage-content'>
                    <h1>Welcome to Replica</h1>
                    <div className='landingPage-link'>
                        <Link className='login pointer' onClick={handleLoginModal}>Login</Link>
                        <LoginForm loginModal={loginModal} handleLoginClose={handleLoginClose} />
                        <Link className='regBtn pointer' onClick={handleSignupModal}>Register</Link>
                        <RegisterForm signupModal={signupModal} handleSignupClose={handleSignupClose} />
                    </div>
                </div>
                {/* Modal for Login */}
                {/* <Modal
                    className={loginModal ? 'modal modalOpen' : 'modal'}
                    modalContentClass="landingPage-form"
                    handleClose={handleLoginModal}
                ></Modal> */}
                {/* End Login modal */}

                {/* Register modal form */}
                {/* <Modal
                    className={regModal ? 'modal modalOpen' : 'modal'}
                    modalContentClass="landingPage-form"
                    handleClose={handleRegModal}
                ></Modal> */}
                {/* End Register modal form */}
            </div>
        </>
    )
}
