import React from 'react'

import { Header } from '../../components/Header'
import "./Profile.css"
import { Link } from 'react-router-dom'

export const Profile = () => {
    return (
        <>
            <div className='row'>
                <Header />
                <div className='main'>
                    <div className='profile'>

                        <div className='profileImg-edit'>
                            <div>Profile image here</div>
                            <div>
                                <Link>
                                    <button className='editProfile'>Edit Profile</button>
                                </Link>
                            </div>
                        </div>

                        <div className='profileDisplay'>
                            <div className='displayName'>
                                <span>Display name</span>
                            </div>

                            <div className='username'>
                                <span>@moyin</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
