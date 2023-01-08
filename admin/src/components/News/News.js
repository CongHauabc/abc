import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import Message from './../LoadingError/Error';
import { deleteNews } from "../../Redux/Actions/newAction";
const News = (props) => {
  const { newss } = props;
  const dispatch = useDispatch()

  const deletehandler = (id)=>{
    if(window.confirm("Are you sure ??")){
      dispatch(deleteNews(id))
    }
   
  }

  return (
    <>
      <div className="col-md-6 col-sm-6 col-lg-3 mb-5">
     
        
        <div className="card card-product-grid shadow-sm">
          <Link to={`/news/${newss._id}/edit`} className="img-wrap">
            <img src={newss.image} alt="Product" />
          </Link>
          <div className="info-wrap">
            <Link to={`/news/${newss._id}/edit`} className="title text-truncate">
              {newss.name}
            </Link>
            
            <div className="row">
              <Link
                to={`/news/${newss._id}/edit`}
                className="btn btn-sm btn-outline-success p-2 pb-3 col-md-6"
              >
                <i className="fas fa-pen"></i>
              </Link>
              <Link
                to="#"
                onClick={()=>deletehandler(newss._id)}
                className="btn btn-sm btn-outline-danger p-2 pb-3 col-md-6"
              >
                <i className="fas fa-trash-alt"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
