import React from 'react'
import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

import { useAddPostData, usePostInfiniteData } from '../../Hooks/useBigPostsHook';

import "./Post.css"
import { PostBody } from '../PostBody/PostBody';

export const Post = () => {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    const { data,
        isLoading,
        isError,
        error,
        hasNextPage,
        isFetchingNextPage,
        fetchNextPage
    } = usePostInfiniteData()

    const { mutate: addPost } = useAddPostData()

    const handleChange = setState => (e) => {
        setState(e.target.value)
    }

    const handleAddPostClick = () => {
        console.log({ title, text })
        const post = { title, text }
        addPost(post)
    }

    if (isLoading) {
        return <h2 style={{ textAlign: "center" }}>Loading...</h2>
    }

    if (isError) {
        return <h2>{error.message}</h2>
    }
    //console.log(data?.pages, 'data')

    return (
        <>
            <div className="postSection">
                <div className="postArena">
                    <input
                        type="text"
                        value={title}
                        placeholder="Title"
                        className="postTitle"
                        onChange={handleChange(setTitle)}
                    />
                    <textarea
                        className="postText"
                        value={text}
                        placeholder="What is happening?!"
                        onChange={handleChange(setText)}
                    />
                    <div className="postBtn">
                        <button
                            onClick={handleAddPostClick}
                        >Blog</button>
                    </div>
                </div>

                <div>
                    {data?.pages.map((group, i) => {
                        //console.log(data?.pages, 'post data')
                        return (
                            <Fragment key={i}>
                                {group.data.map((post) => {
                                    //console.log(group.data, 'group data')
                                    return (
                                        <div className="blogPost" key={post.id}>
                                            <Link to={`/post/${post.id}`}>
                                                <PostBody
                                                    title={post.title}
                                                    body={post.body}
                                                />
                                            </Link>
                                        </div>
                                    )
                                })}
                            </Fragment>
                        )
                    })}
                </div>

                <div className='loadMore'>
                    <button
                        className='loadMoreBtn pointer'
                        disabled={!hasNextPage}
                        onClick={() => fetchNextPage()}
                    >
                        {isFetchingNextPage
                            ? 'Loading More...' :
                            hasNextPage ? 'Load More' : 'No more data'}
                    </button>
                </div>
            </div>
        </>
    )
}
