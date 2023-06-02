import React from 'react'

import { Header } from '../../components/Header'
import "./editProfile.css"

import anonImg from "../../asset/images/anonImg.jpeg"

export const EditProfile = (props) => {
    const hiddenFileInput = React.useRef(null);
    const handleFileClick = () => {
        hiddenFileInput.current.click();
    }

    const handleChange = event => {
        const fileUploaded = event.target.files[0];
        props.handleFile(fileUploaded);
    };

    return (
        <>
            <div className='row'>
                <Header />
                <div className='main'>
                    <div className='editProfile'>
                        <h1>Edit Profile</h1>
                        <form className='editSpaceTop'>
                            <div className='editImage'>
                                <div className='editSpaceRight'><img src={anonImg} alt="profile image" /></div>
                                <div>
                                    <input
                                        type='file'
                                        style={{ display: 'none' }}
                                        ref={hiddenFileInput}
                                        onChange={handleChange}
                                    />
                                    <label
                                        onClick={handleFileClick}
                                        className="chooseLabel"
                                        for="upload">Choose Profile Photo</label>
                                </div>
                            </div>

                            <div className='editBio editSpaceTop'>
                                <div className='editSpaceRight'><span>Bio</span></div>
                                <div>
                                    <textarea maxLength={150} />
                                    <p className='textCount'>30/150</p>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
