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
                        //console.log(group, 'group')
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