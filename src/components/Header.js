import React, { useState, useEffect } from "react";
import logoWhite from "../assets/img/logowhite.png";
import logoBlack from "../assets/img/logoblack.png";
import { Link } from "react-router-dom";
import axios from "axios";
import requestUrls from "../constants/requestUrls";

const Header = (props) => {
  const [categories, setCategories] = useState();
  const [reRender, setReRender] = useState(true);

  useEffect(() => {
    getCategories();
  }, []);

  function getCategories() {
    axios
      .get(`${requestUrls.base_url}${requestUrls.category_list}`)
      .then((res) => {
        // console.log(res);
        if (res.status === 200) {
          setCategories(res.data.payload.categories);
          setReRender(!reRender);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div id="navbar" className="navbar navbar-expand-lg fixed-top navbar-light">
      <div className="container">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.theme === "black" ? (
              <img src={logoBlack} alt="Logo" />
            ) : (
              <img src={logoWhite} alt="Logo" />
            )}
          </a>
          <button
            className="navbar-toggler custom-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item mx-2">
                <Link className={`nav-link ${props.theme}`} to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item mx-2 dropdown">
                <Link
                  className={`nav-link ${props.theme} dropdown-toggle`}
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Categories
                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {categories &&
                    categories.map((category) => (
                      <Link
                        className="dropdown-item"
                        to={{
                          pathname: `/${category.slug}`,
                          state: { category: category },
                        }}
                      >
                        {category.name}
                      </Link>
                    ))}
                </div>
              </li>
              <li className="nav-item mx-2">
                <Link className={`nav-link ${props.theme}`} to="/about">
                  About Us
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className={`nav-link ${props.theme}`} to="/choose">
                  Why GDSE
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className={`nav-link ${props.theme}`} to="/blog">
                  Blogs
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className={`nav-link ${props.theme}`} to="/about">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
