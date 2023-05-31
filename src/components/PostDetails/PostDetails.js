import { useParams } from "react-router-dom"

import { usePostData } from "../../Hooks/usePostsHook"
import { PostBody } from "../PostBody/PostBody";

export const PostDetails = () => {
    const { postId } = useParams()
    const { isLoading, data, isError, error } = usePostData(postId)

    if (isLoading) {
        return <h2>Loading...</h2>
    }

    if (isError) {
        return <h2>{error.message}</h2>
    }

    //console.log(data, 'dataaaa')

    return (
        <>
            <div>
                <div className="blogPost" key={data?.data.id}>
                    <PostBody
                        title={data?.data.title}
                        body={data?.data.body}
                    />
                </div>
            </div>
        </>
    )
}
