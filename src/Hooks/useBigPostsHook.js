import { useInfiniteQuery, useMutation, useQuery, useQueryClient } from "react-query";

import { request } from "../utils/axiosUtils";

// Fetch all post data
const fetchPostsData = () => {
    return request({ url: `/posts` })
}

export const usePostsData = () => {
    return useQuery(
        'posts',
        fetchPostsData
    )
}



// This caters for the post fetch in the home page
const fetchPostInfiniteData = (pageParam = 1) => {
    return request({ url: `/posts?_limit=5&_page=${pageParam}` })
}

export const usePostInfiniteData = (onError) => {
    return useInfiniteQuery(
        ['posts-infinite'],
        fetchPostInfiniteData,
        {
            getNextPageParam: (_lastPage, pages) => {
                if (pages.length < 100) {
                    return pages.length + 1
                } else {
                    return undefined
                }
            },
            onError: onError
        }
    )
}



// Adding new post
const addPostData = (post) => {
    return request({ url: `/posts`, method: 'post', data: post })
}

export const useAddPostData = (
    onAddPostSuccess
) => {
    const queryClient = useQueryClient();
    return useMutation(addPostData,
        {
            onMutate: async (newPost) => {
                await queryClient.cancelQueries('posts-infinite')

                const previousPostData = queryClient.getQueryData('posts-infinite')
                //console.log(previousPostData, 'previous')
                queryClient.setQueryData('posts-infinite', (oldQueryData) => {
                    //console.log(oldQueryData?.pages, 'old')
                    oldQueryData?.pages.map((group, i) => {
                        // console.log(group, 'group')
                        // group?.data.map(moyin => {
                        //     console.log(moyin.comments, 'moyin')
                        //     moyin.comments?.map(moyinComment => {
                        //         console.log(moyinComment, 'Comment')
                        //     })
                        // })
                        return {
                            ...group,
                            data: [
                                ...group.data,
                                {
                                    id: group?.data?.length + 1,
                                    ...newPost
                                }
                            ]
                        }
                    })
                })

                return {
                    previousPostData
                }
            },
            onError: (_err, _hero, context) => {
                queryClient.setQueryData('posts-infinite', context.previousPostData)
            },
            onSettled: () => {
                queryClient.invalidateQueries('posts-infinite')
            },
            onSuccess: onAddPostSuccess
        }
    )
}



// For comment
// I'm supposed to have a url to post comments to but however it seems
// add to add into the comments under each post.
// so I'm using the query key i used for the home pages to get posts comments
const addComment = (comment) => {
    return request({ url: `/posts`, method: 'post', data: comment })
}

export const useAddPostComment = () => {
    const queryClient = useQueryClient();
    return useMutation(addComment,
        {
            onMutate: async (newComment) => {
                await queryClient.cancelQueries('posts-infinite')

                const previousCommentData = queryClient.getQueryData('posts-infinite')
                queryClient.setQueryData('posts-infinite', (oldQueryData) => {
                    oldQueryData?.pages.map((group) => {
                        console.log(group, 'groupppppp')
                        group?.data.map((postComments) => {
                            console.log(postComments, 'post comments')
                            return {
                                ...postComments,
                                data: [
                                    ...postComments.comments,
                                    {
                                        commentId: postComments?.comments?.length + 1,
                                        ...newComment
                                    }
                                ]
                            }
                        })
                    })
                })
                return {
                    previousCommentData
                }
            },
            onError: (err, _comment, _context) => {
                // queryClient.setQueryData('posts-infinite',context)
                console.log('errorrrrrr', err)
            },
            onSettled: () => {
                queryClient.invalidateQueries('posts-infinite')
            }
        }
    )
}