import React from 'react'
import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

import { useAddPostData, usePostInfiniteData } from '../../Hooks/useBigPostsHook';

import "./index.css"
import { Post } from '../../components/Post';
import { Header } from '../../components/Header';

export const Home = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const onAddPostSuccess = () => {
        return alert('new post has been added')
    }

    const onError = () => {
        return <h2>something went wrong</h2>
    }

    const { data,
        isLoading,
        isError,
        error,
        hasNextPage,
        isFetchingNextPage,
        fetchNextPage
    } = usePostInfiniteData(onError)

    const { mutate: addPost } = useAddPostData(
        onAddPostSuccess
    )

    const handleChange = setState => (e) => {
        setState(e.target.value)
    }

    const handleAddPostClick = () => {
        console.log({ title, body })
        const post = { title, body }
        addPost(post)
        setTitle('');
        setBody('')
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
            <div className='row'>
                <Header />
                <div className='main'>
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
                                value={body}
                                placeholder="What is happening?!"
                                onChange={handleChange(setBody)}
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
                                                        <Post
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
                </div>
            </div>
        </>
    )
}
