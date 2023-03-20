import React from "react";
import "./css/header.css";
import { Search, ShoppingBasket } from "@mui/icons-material/";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";

function Header() {
  const [state, dispatch] = useStateValue();

  return (
    <div className="header">
      <Link to="/">
        <img
          alt="logo"
          className="header_logo"
          src="https://i0.wp.com/www.dafontfree.co/wp-content/uploads/2021/11/Amazon-Logo-Font-1-scaled.jpg?fit=2560%2C1578&ssl=1"
        />
      </Link>

      <div className="header_search">
        <input type="text" className="header_searchinput" />
        <Search className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <Link to="/login">
          <div className="header_option">
            <span className="header_optionLineOne">Hello Guest</span>
            <span className="header_optio+nLineTwo">Sign in</span>
          </div>
        </Link>

        <div className="header_option">
          <span className="header_optionLineOne">Returns</span>
          <span className="header_optionLineTwo">& Orders</span>
        </div>

        <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header_optionBasket">
            <ShoppingBasket />
            <span className="header_optionLineTwo header_basketCount">
              {state.basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
