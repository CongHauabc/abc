import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { createProduct } from "../../Redux/Actions/ProductAction";

import Toast from "../LoadingError/Toast";
import Message from "../LoadingError/Error";
import Loading from "../LoadingError/Loading";
import { listCategory } from "../../Redux/Actions/categoryAction";
import { BANNER_CREATE_RESET } from "../../Redux/Constants/bannerConstant";
import { createBanner } from '../../Redux/Actions/bannerAction';
import { NEWS_CREATE_RESET } from "../../Redux/Constants/newConstant";
import { createNews } from "../../Redux/Actions/newAction";

const ToastObjects = {
  pauseOnFocusLoss: false,
  draggable: false,
  pauseOnHover: false,
  autoClose: 2000,
};
const AddNewsMain = () => {
  const [image, setImage] = useState(" ");
    const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();


  const newCreate = useSelector((state) => state.newCreate);
  const { loading, error, news } = newCreate;

  useEffect(() => {
    if (news) {
      toast.success("News added", ToastObjects);
      dispatch({ type: NEWS_CREATE_RESET });
      setImage(" ")
      setName(" ")
      setDescription(" ")

    }
  }, [dispatch, news]);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createNews(name,image,description));
  };
  return (
    <>
      <Toast />
      <section className="content-main" style={{ maxWidth: "1200px" }}>
        <form onSubmit={submitHandler}>
          <div className="content-header">
            <Link to="/banner" className="btn btn-danger text-white">
              Go to banner
            </Link>
            <h2 className="content-title">Add banner</h2>
            <div>
              <button type="submit" className="btn btn-primary">
                Publish now
              </button>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-xl-8 col-lg-8">
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  {error && <Message variant="alert-danger">{error}</Message>}
                  {loading && <Loading />}
                  <div className="mb-4">
                    <label htmlFor="product_title" className="form-label">
                      Product title
                    </label>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="form-control"
                      id="product_title"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="form-label">Description</label>
                    <textarea
                      placeholder="Type here"
                      className="form-control"
                      rows="7"
                      required
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                  </div>
                  <div className="mb-4">
                    <label className="form-label">Images</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Enter Image URL"
                      required
                      value={image}
                      onChange={(e) => setImage(e.target.value)}
                    />
                    <input className="form-control mt-3" type="file" />
                  </div>
                  <img src={image} style={{width:"100%"}}/>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default AddNewsMain;
