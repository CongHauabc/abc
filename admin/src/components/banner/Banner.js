import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import Loading from "../LoadingError/Loading";
import Message from "../LoadingError/Error";
import { bannerLogo, deleteBanner } from './../../Redux/Actions/bannerAction';

const Banner = (props) => {
  const {banners} = props 
  const dispatch = useDispatch()

  const bannerShow = useSelector((state) => state.bannerShow);
  const { loading: loadingbanner, error: errorbanner, banner } = bannerShow;
  const bannerDelete = useSelector((state)=>state.bannerDelete)
  const {error:errorDelete,success:successDelete} = bannerDelete
  
  useEffect(() => {
    dispatch(bannerLogo());
  }, [dispatch,successDelete]);

  const deletehandler = (id)=>{
    if(window.confirm("Are you sure ??")){
      dispatch(deleteBanner(id))
    }
    
  }

  return (
    <section className="content-main">
      <div className="content-header">
        <h2 className="content-title">Banner</h2>
        <div>
          <Link to="/addbanner" className="btn btn-primary">
            Create new
          </Link>
        </div>
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
          {errorDelete && (
            <Message variant="alert-danger">{errorDelete}</Message>
          )}
        {
          loadingbanner ? <Loading/> :errorbanner ? (<Message variant="alert-danger" >{errorbanner}</Message>):
          (
            <div className="row">
            {/* Products */}
            {banner.map((product) => (
              <div className="col-md-4 col-sm-3 col-lg-3 mb-2">
        <div className="card card-product-grid shadow-sm">
          <Link to="#" className="img-wrap">
            <img src={product.image} alt="Product" />
          </Link>
          <div className="info-wrap">
  
            <div className="row">
              <Link
                to={`/banner/${product._id}/edit`}
                className="btn btn-sm btn-outline-success p-2 pb-3 col-md-6"
              >
                <i className="fas fa-pen"></i>
              </Link>
              <Link
                to="#"
                onClick={()=>deletehandler(product._id)}
                className="btn btn-sm btn-outline-danger p-2 pb-3 col-md-6"
              >
                <i className="fas fa-trash-alt"></i>
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

export default Banner;
