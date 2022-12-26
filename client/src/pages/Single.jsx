import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Menu from "../components/Menu";
import moment from "moment";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";

const Single = () => {
  const [post, setPost] = useState([]);
  const location = useLocation();

  const postId = location.pathname.split("/")[2];
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8080/api/posts/${postId}`,
          { withCredentials: true }
        );
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [postId]);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8080/api/posts/${postId}`, {
        withCredentials: true,
      });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");

    return doc.body.textContent;
  };

  return (
    <div className="single">
      <div className="content">
        <img src={`../uploads/${post?.img}`} alt="" />
        <div className="user">
          {post?.userImg && <img src={post?.userImg} alt="" />}

          <div className="info">
            <span>{post.username}</span>
            <p>Posted {moment(post.date).fromNow()} </p>
          </div>
          {currentUser?.username === post.username && (
            <div className="edit">
              <Link
                className="link"
                to={`/write?edit=${post?.id}`}
                state={post}
              >
                <i className="fa-solid fa-pen-to-square"></i>
              </Link>
              <i onClick={handleDelete} className="fa-solid fa-trash link"></i>
            </div>
          )}
        </div>
        <h1>{post?.title}</h1>
        {getText(post?.desc)}
      </div>
      <Menu cat={post?.cat} />
    </div>
  );
};

export default Single;
