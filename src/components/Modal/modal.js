import React, { useState } from 'react'

import "./modal.css"

export const Modal = ({ className, modalContentClass, handleClose, children }) => {
    // const [close, setClose] = useState(false)

    // const handleClose = () => {
    //     setClose(!close)
    // }

    return (
        <>
            <div className={className}>
                {/* In the modalContentClass you can set the
                background to whatever you like  */}
                <div className={modalContentClass}>
                    <div className='modal-header'>
                        <span
                            onClick={handleClose}
                            className='close'>
                            &times;
                        </span>
                    </div>
                    <div className='modal-body'>
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}