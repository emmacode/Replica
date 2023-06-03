import { useParams } from "react-router-dom"

import { usePostData } from "../../Hooks/usePostsHook"
import { Post } from "../../components/Post";
import { Header } from "../../components/Header";
import { Comment } from "../../components/Comment";

export const PostDetails = () => {
    const { postId } = useParams()
    const { isLoading, data, isError, error } = usePostData(postId)

    if (isLoading) {
        return <h2>Loading...</h2>
    }

    if (isError) {
        return <h2>{error.message}</h2>
    }

    //console.log(data?.data.comments, 'dataaaa')

    return (
        <>
            <div className="row">
                <Header />
                <div className="main">
                    <div className="blogPost" key={data?.data.id}>
                        <Post
                            title={data?.data.title}
                            body={data?.data.body}
                        />
                    </div>
                    <div>
                        {data?.data.comments.map((comment) => {
                            return <Comment
                                key={comment.commentId}
                                body={comment.CommentBody}
                            />
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}