import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../src/context/userContext";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader";
import DeletePost from "./DeletePost";

function Dashboard() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  const navigate = useNavigate();

  const { currentUser } = useContext(UserContext);
  const token = currentUser?.token;

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/posts/users/${id}`,
          {
            withCredentials: true,
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setPosts(response.data);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };
    fetchPosts();
  }, [id]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className="dashboard">
      {posts.length ? (
        <div className="container dashboard__container">
          {posts.map((posts) => {
            return (
              <article key={posts.id} className="dashboard__post">
                <div className="dashboard__posts-info">
                  <div className="dashboard__post-thumbnail">
                    <img
                      src={`${import.meta.env.VITE_ASSETS_URL}/uploads/${
                        posts.thumbnail
                      }`}
                      alt="avatar"
                    />
                  </div>
                  <h5>{posts.title}</h5>
                </div>
                <div className="dashboard__post-actions">
                  <Link to={`/posts/${posts._id}`} className="btn sm">
                    view
                  </Link>
                  <Link
                    to={`/posts/${posts._id}/edit`}
                    className="btn sm primary"
                  >
                    edit
                  </Link>
                  <DeletePost postID={posts._id} />
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <h2 className="center">You have no posts yet</h2>
      )}
    </section>
  );
}

export default Dashboard;
