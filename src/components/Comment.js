import React from 'react'

export const Comment = (props) => {
    return (
        <>
            <div className='postComment'>
                <li>{props.body}</li>
            </div>
        </>
    )
}
