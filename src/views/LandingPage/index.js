import React, { useState } from 'react'

import "./index.css"
import { Link } from 'react-router-dom'
//import { Modal } from '../../components/Modal/modal'
import { Form } from '../../components/Form/form'

export const LandingPage = () => {
    //const [loginModal, setLoginModal] = useState(false);
    //const [regModal, setRegModal] = useState(false);

    // const handleLoginModal = () => {
    //     setLoginModal(!loginModal)
    // }

    // const handleRegModal = () => {
    //     setRegModal(!regModal)
    // }

    return (
        <>
            <div className='landingPage'>
                <div className='landingPage-content'>
                    <h1>Welcome to Replica</h1>
                    <div className='landingPage-link'>
                        <Link className='login pointer' to={'/login'}>Login</Link>
                        <Link className='regBtn pointer' to={'/signup'}>Register</Link>
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
