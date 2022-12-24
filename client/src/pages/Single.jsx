import React from "react";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />

          <div className="info">
            <span>Username</span>
            <p>Posted 2 days ago.</p>
          </div>
          <div className="edit">
            <Link to={`write?edit=2`}>
              <i class="fa-solid fa-pen-to-square"></i>
            </Link>
            <i class="fa-solid fa-trash"></i>
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
          corrupti illo ex maiores reprehenderit officia at et repellendus,
          molestiae suscipit, natus expedita necessitatibus autem architecto
          magni provident non illum numquam aspernatur laborum voluptatum ipsa.
          Sequi odit optio fuga esse et.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sequi
          labore provident, quis debitis praesentium neque! Sed nostrum alias
          nulla in facere assumenda explicabo dolore minima quas! Dolorem eius
          exercitationem qui soluta eos. Perspiciatis accusamus maxime a?
          Ducimus, corporis necessitatibus earum blanditiis neque possimus ad?
          Reiciendis eum praesentium itaque. Mollitia at ratione error saepe
          aspernatur voluptate natus debitis, ut quas.
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default Single;
