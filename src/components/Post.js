import React, { useState } from 'react'

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContentText from '@mui/material/DialogContentText';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
import CloseIcon from '@mui/icons-material/Close';
import { DialogActions } from '@mui/material';

import "./css/post.css"
import { useAddPostComment } from '../Hooks/useBigPostsHook';

export const Post = (props) => {
    const [like, setLike] = useState(false);
    const [commentBody, setCommentBody] = useState('');

    const [open, setOpen] = React.useState(false);

    const { mutate: addComment } = useAddPostComment()

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleLike = () => {
        setLike(!like)
    }

    const handleCommentClick = () => {
        console.log(commentBody);
        const comment = { commentBody }
        addComment(comment)
        setCommentBody('')
    }

    //console.log(props, 'props')

    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.body}</p>
            <div className='postAction'>
                <div>
                    <ChatBubbleOutlineIcon
                        className='pointer'
                        onClick={handleOpen}
                    />
                    <Dialog open={open} onClose={handleClose}>
                        <DialogActions className='closeDialog'>
                            <Button sx={{ color: '#fff' }} onClick={handleClose}><CloseIcon /></Button>
                        </DialogActions>
                        <DialogTitle>{props.title}</DialogTitle>
                        <DialogContent>
                            <DialogContentText>{props.body}</DialogContentText>
                            <textarea
                                className="postText"
                                value={commentBody}
                                placeholder="post your comment!"
                                onChange={(e) => setCommentBody(e.target.value)}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button className='replyBtn' onClick={handleCommentClick}>Reply</Button>
                        </DialogActions>
                    </Dialog>
                </div>

                <div onClick={handleLike}>
                    {like ?
                        <ThumbUpAltIcon className='pointer' />
                        : <ThumbUpOffAltIcon className='pointer' />
                    }
                </div>

                <div>
                    <ShareIcon className='pointer' />
                </div>
            </div>
        </div>
    )
}
