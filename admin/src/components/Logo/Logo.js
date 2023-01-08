import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { showLogo } from "../../Redux/Actions/logoAction";
import Loading from "../LoadingError/Loading";
import Message from "../LoadingError/Error";

const Logo = (props) => {
  const {logos} = props 
  const dispatch = useDispatch()
  const logoShow = useSelector((state)=>state.logoShow)
  const {loading,error,logo} = logoShow

  useEffect(() => {
    dispatch(showLogo())
  }, [dispatch]);

  return (
    <section className="content-main">
      <div className="content-header">
        <h2 className="content-title">Logo</h2>
        
      </div>

      <div className="card mb-4 shadow-sm">
        <header className="card-header bg-white ">
          <div className="row gx-3 py-3">
            <div className="col-lg-4 col-md-6 me-auto ">
              <input
                type="search"
                placeholder="Search..."
                className="form-control p-2"
              />
            </div>
            <div className="col-lg-2 col-6 col-md-3">
              <select className="form-select">
                <option>All category</option>
                <option>Electronics</option>
                <option>Clothings</option>
                <option>Something else</option>
              </select>
            </div>
            <div className="col-lg-2 col-6 col-md-3">
              <select className="form-select">
                <option>Latest added</option>
                <option>Cheap first</option>
                <option>Most viewed</option>
              </select>
            </div>
          </div>
        </header>

        <div className="card-body">
          {/* {errorDelete && (
            <Message variant="alert-danger">{errorDelete}</Message>
          )} */}
        {
          loading ? <Loading/> :error ? (<Message variant="alert-danger" >{error}</Message>):
          (
            <div className="row">
            {/* Products */}
            {logo.map((product) => (
              <div className="col-md-12 col-sm-12 col-lg-12 mb-12">
        <div className="card card-product-grid shadow-sm">
          <Link to="#" className="img-wrap">
            <img src={product.image} alt="Product" />
          </Link>
          <div className="info-wrap">
  
            <div className="row">
              <Link
                to={`/logo/${product._id}/edit`}
                className="btn btn-sm btn-outline-success p-12 pb-12 col-md-12"
              >
                <i className="fas fa-pen"></i>
              </Link>
              
            </div>
          </div>
        </div>
      </div>
            ))}
          </div>
          )
        }

          
        </div>
      </div>
    </section>
  );
};

export default Logo;
