import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../LoadingError/Loading';
import Message from '../LoadingError/Error';
import { showNews } from "../../Redux/Actions/newAction";
import News from './News';

const MainNews = () => {

  const dispatch = useDispatch();

  const newShow = useSelector((state) => state.newShow);
  const { loading, error, news } = newShow;
  const newDelete = useSelector((state)=>state.newDelete)
  const {error:errorDelete,success:successDelete} = newDelete
  useEffect((e) => {
    dispatch(showNews());
  }, []);
  
  return (
    <section className="content-main">
      <div className="content-header">
        <h2 className="content-title">News</h2>
        <div>
          <Link to="/addnews" className="btn btn-primary">
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
        {errorDelete && (<Message variant="alert-danger" >{errorDelete}</Message>) }
      {
        loading ? (<Loading/>) : error ? (<Message variant="alert-danger" >{error}</Message>):
        (
          <div className="row">
            
            {news.map((newss) => (
              <News newss={newss} key={newss._id} />
            ))}
          </div>
        )
      }
    
          

          <nav className="float-end mt-4" aria-label="Page navigation">
            <ul className="pagination">
              <li className="page-item disabled">
                <Link className="page-link" to="#">
                  Previous
                </Link>
              </li>
              <li className="page-item active">
                <Link className="page-link" to="#">
                  1
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="#">
                  2
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="#">
                  3
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="#">
                  Next
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default MainNews;
