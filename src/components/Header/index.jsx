import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";

import Container from "../../layout/Container";
import logo from "../../images/logo.png";
import categories from "../../routes/categories";

import classes from "./Header.module.scss";

const Header = () => {
  const location = useLocation();

  return (
    <header className={classes["header"]}>
      <Container className={classes["header__container"]}>
        <Link to="/" className={classes["header__logo"]}>
          <img src={logo} alt="Flaristman" />
        </Link>
        <Link to="/favorite">
          <FontAwesomeIcon
            className={classes["header__heart"]}
            icon={faHeart}
          />
        </Link>
        <FontAwesomeIcon
          className={classes["header__bag"]}
          icon={faBagShopping}
        />
      </Container>
      <Container>
        <ul className={classes["header__list"]}>
          {categories.map(({ link, text }) => (
            <li key={link}>
              <Link
                to={link}
                className={classNames(
                  classes["header__link"],
                  location.pathname === link
                    ? classes["header__link-active"]
                    : ""
                )}
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </header>
  );
};

export default Header;
