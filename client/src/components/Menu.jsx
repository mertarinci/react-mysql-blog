import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Menu = ({ cat }) => {
  const [posts, setPosts] = useState([]);
  const location = useLocation();
  const postId = location.pathname.split("/")[2];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8080/api/posts?cat=${cat}`
        );
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [cat]);
  return (
    <div className="menu">
      <h1>Other posts you may like</h1>
      {posts?.map(
        (post) =>
          // eslint-disable-next-line eqeqeq
          postId != post.id && (
            <div className="post" key={post.id}>
              <Link to={`/post/${post.id}`}>
                <img src={post.img} alt="" />
              </Link>
              <h3>{post.title}</h3>
              <button>Read More</button>
            </div>
          )
      )}
    </div>
  );
};

export default Menu;
