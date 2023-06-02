import { useQuery, useQueryClient } from "react-query";

import { request } from "../utils/axiosUtils";

const fetchPostData = ({ queryKey }) => {
    const postId = queryKey[1]
    return request({ url: `/posts/${postId}` })
}

export const usePostData = (postId) => {
    const queryClient = useQueryClient()
    return useQuery(
        ['post', postId],
        fetchPostData,
        {
            initialData: () => {
                const post = queryClient
                    .getQueryData('posts')
                    ?.data?.find(post => post.id === parseInt(postId))
                // console.log(post)
                if (post) {
                    return {
                        data: post
                    }
                } else {
                    return undefined
                }
            }
        }
    )
}