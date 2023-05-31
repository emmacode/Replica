import React, { useState } from 'react'

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
import CloseIcon from '@mui/icons-material/Close';

// For comment modal

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#b8a9a98f',
    color: '#000',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export const PostBody = (props) => {
    const [like, setLike] = useState(false);
    const [comment, setComment] = useState('');

    const [open, setOpen] = React.useState(false);

    const handleChange = setState => (e) => {
        setState(e.target.value)
    }

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleLike = () => {
        setLike(!like)
    }

    //console.log(props, 'props')

    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.body}</p>
            <div className='postAction'>
                <ChatBubbleOutlineIcon
                    className='pointer'
                    onClick={handleOpen}
                />
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <CloseIcon onClick={handleClose} />
                        <textarea
                            value={comment}
                            className='postComment'
                            placeholder='Comment your reply!'
                            onChange={handleChange(setComment)}
                        />
                    </Box>
                </Modal>
                <div onClick={handleLike}>
                    {like ?
                        <ThumbUpAltIcon className='pointer' />
                        : <ThumbUpOffAltIcon className='pointer' />
                    }
                </div>
                <ShareIcon className='pointer' />
            </div>
        </div>
    )
}
