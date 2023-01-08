import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from "../Redux/Actions/userAction";
import moment  from "moment";
import { listOrders } from "../Redux/Actions/OrderAction";
import Loading from "./LoadingError/Loading";
import Message from "./LoadingError/Error";
const Header = () => {
  const dispatch = useDispatch()

  const orderList = useSelector((state) => state.orderList);
  const { loading, error, orders } = orderList;
  useEffect(()=>{
    dispatch(listOrders())
  },[])
  console.log(orders)
  useEffect(() => {
    $("[data-trigger]").on("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      var offcanvas_id = $(this).attr("data-trigger");
      $(offcanvas_id).toggleClass("show");
    });

    $(".btn-aside-minimize").on("click", function () {
      if (window.innerWidth < 768) {  
        $("body").removeClass("aside-mini");
        $(".navbar-aside").removeClass("show");
      } else {
        // minimize sidebar on desktop
        $("body").toggleClass("aside-mini");
      }
    });
  }, []);


  const logoutHandler = () =>{
    dispatch(logout())
  }

  return (
    <header className="main-header navbar">
      <div className="col-search">
        <form className="searchform">
          <div className="input-group">
            <input
              list="search_terms"
              type="text"
              className="form-control"
              placeholder="Search term"
            />
            <button className="btn btn-light bg" type="button">
              <i className="far fa-search"></i>
            </button>
          </div>
          <datalist id="search_terms">
            <option value="Products" />
            <option value="New orders" />
            <option value="Apple iphone" />
            <option value="Ahmed Hassan" />
          </datalist>
        </form>
      </div>
      <div className="col-nav">
        <button
          className="btn btn-icon btn-mobile me-auto"
          data-trigger="#offcanvas_aside"
        >
          <i className="md-28 fas fa-bars"></i>
        </button>
        <ul className="nav">
          <li className="nav-item">
            <Link className={`nav-link btn-icon `} title="Dark mode" to="#">
              <i className="fas fa-moon"></i>
            </Link>
          </li>
          <li className="dropdown nav-item">
            <Link className="dropdown-toggle" data-bs-toggle="dropdown" to="#">
            <i className="fas fa-bell"></i>
            </Link>
            <div className="dropdown-menu dropdown-menu-end" style={{padding:"10px",minWidth:"300px"}}>
            {loading ? (
        <Loading />
      ) : error ? (
        <Message variant="alert-danger">{error}</Message>
      ) : (
        <>
          {
            orders.slice(0, 5).map((order)  => (
              <Link to={`/order/${order._id}`} style={{textDecoration:"none",color:"black"}}>

              <p style={{borderBottom:"1px solid"}}><b>{order.user.name}</b> buy at {moment(order.createdAt).calendar()}</p>
              </Link>
            ))
          }
        </>
      )}
            </div>
          </li>
          {/* <li className="nav-item">
            <Link className="nav-link btn-icon" to="">
              <i className="fas fa-bell"></i>
            </Link>
          </li> */}
          <li className="nav-item">
            <Link className="nav-link" to="">
              English
            </Link>
          </li>
          <li className="dropdown nav-item">
            <Link className="dropdown-toggle" data-bs-toggle="dropdown" to="#">
              <img
                className="img-xs rounded-circle"
                src="/images/logo2.png"
                alt="User"
              />
            </Link>
            <div className="dropdown-menu dropdown-menu-end">
              <Link className="dropdown-item" to="/">
                My profile
              </Link>
              <Link className="dropdown-item" to="#">
                Settings
              </Link>
              <Link onClick={logoutHandler} className="dropdown-item text-danger" to="#">
                Exit
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
