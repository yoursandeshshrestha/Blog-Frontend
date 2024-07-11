import React, { useContext, useEffect, useState } from "react";
import PostAuthor from "../components/PostAuthor";
import { Link, useParams } from "react-router-dom";
import Thumbnail from "../src/assets/images/blog22.jpg";
import Loader from "../components/Loader";
import DeletePost from "./DeletePost";
import { UserContext } from "../src/context/userContext";
import axios from "axios";

function PostDetails() {
  const { id } = useParams();

  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [thumbnail, setThumbnail] = useState(null);

  const { currentUser } = useContext(UserContext);

  useEffect(() => {
    const getPost = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/posts/${id}`
        );
        setPost(response.data);
        setThumbnail(response.data.thumbnail);
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    };
    getPost();
  }, [id]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className="post-detail">
      {error && <p className="error">{error.message}</p>}
      {post && (
        <div className="container post-detail__container">
          <div className="post-detail__header">
            <PostAuthor authorID={post.creator} createdAt={post.createdAt} />
            {currentUser?.id === post?.creator && (
              <div className="post-detail__buttons">
                <Link to={`/posts/${id}/edit`} className="btn sm primary">
                  Edit
                </Link>
                <DeletePost postID={id} />
              </div>
            )}
          </div>
          <h1>{post.title}</h1>
          <div className="post-detail__thumbnail">
            <img
              src={`${import.meta.env.VITE_ASSETS_URL}/uploads/${thumbnail}`}
              alt={post.title}
            />
          </div>
          <p dangerouslySetInnerHTML={{ __html: post.description }}></p>
        </div>
      )}
    </section>
  );
}

export default PostDetails;
