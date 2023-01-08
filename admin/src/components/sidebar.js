import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { showLogo } from "./../Redux/Actions/logoAction";

const Sidebar = () => {
  const dispatch = useDispatch();

  const logoShow = useSelector((state) => state.logoShow);
  const { logo } = logoShow;
  useEffect((e) => {
    dispatch(showLogo());
  }, []);

  return (
    <div>
      <aside className="navbar-aside" id="offcanvas_aside">
        <div className="aside-top">
          <Link to="/" className="brand-wrap">
            {logo.map((lo) => (
              <img
                src={lo.image}
                style={{ height: "46" }}
                className="logo"
                alt="Ecommerce dashboard template"
              />
            ))}
          </Link>
          <div>
            <button className="btn btn-icon btn-aside-minimize">
              <i className="text-muted fas fa-stream"></i>
            </button>
          </div>
        </div>

        <nav>
          <ul className="menu-aside">
            <li className="menu-item">
              <NavLink
                activeClassName="active"
                className="menu-link"
                to="/"
                exact={true}
              >
                <i className="icon fas fa-home"></i>
                <span className="text">Dashboard</span>
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                activeClassName="active"
                className="menu-link"
                to="/products"
              >
                <i className="icon fas fa-shopping-bag"></i>
                <span className="text">Products</span>
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                activeClassName="active"
                className="menu-link"
                to="/addproduct"
              >
                <i className="icon fas fa-cart-plus"></i>
                <span className="text">Add product</span>
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                activeClassName="active"
                className="menu-link"
                to="/category"
              >
                <i className="icon fas fa-list"></i>
                <span className="text">Categories</span>
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                activeClassName="active"
                className="menu-link"
                to="/orders"
              >
                <i className="icon fas fa-bags-shopping"></i>
                <span className="text">Orders</span>
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                activeClassName="active"
                className="menu-link"
                to="/users"
              >
                <i className="icon fas fa-user"></i>
                <span className="text">Users</span>
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                activeClassName="active"
                className="menu-link"
                to="/logo"
              >
                <i className="icon fas fa-store-alt"></i>
                <span className="text">Logo</span>
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                activeClassName="active"
                className="menu-link"
                to="/banner"
              >
                <i className="icon fas fa-usd-circle"></i>
                <span className="text">Banner</span>
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                activeClassName="active"
                className="menu-link"
                to="/news"
              >
                <i class="icon fas fa-newspaper"></i>
                <span className="text">News</span>
              </NavLink>
            </li>
            {/* <li className="menu-item">
              <NavLink
                activeClassName="active"
                className="menu-link disabled"
                to="/sellers"
              >
                <i className="icon fas fa-store-alt"></i>
                <span className="text">LoG</span>
              </NavLink>
            </li> */}

            {/* <li className="menu-item">
              <NavLink
                activeClassName="active"
                className="menu-link disabled"
                to="/transaction"
              >
                <i className="icon fas fa-usd-circle"></i>
                <span className="text">Transactions</span>
              </NavLink>
            </li> */}
          </ul>
          <br />
          <br />
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
