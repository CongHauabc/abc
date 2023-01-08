import React, { useEffect, useState } from "react";
import Toast from "../LoadingError/Toast";
import { Link ,useHistory} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editProduct, updateProduct } from "../../Redux/Actions/ProductAction";
import { PRODUCT_UPDATE_RESET } from "../../Redux/Constants/ProductConstant";
import { toast } from "react-toastify";
import Message from "../LoadingError/Error";
import Loading from "../LoadingError/Loading";
import { listNewsDetails, updateNew } from "../../Redux/Actions/newAction";
import { NEWS_UPDATE_RESET } from "../../Redux/Constants/newConstant";

const ToastObjects = {
  pauseOnFocusLoss: false,
  draggable: false,
  pauseOnHover: false,
  autoClose: 2000,
};

const EditnewsMain = (props) => {
  const { newId } = props;
const history = useHistory()
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const dispatch = useDispatch();

  const newDetail = useSelector((state) => state.newDetail);
  const { loading, error, news } = newDetail;

  const newUpdate = useSelector((state) => state.newUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = newUpdate;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: NEWS_UPDATE_RESET });
      toast.success("News Updated", ToastObjects);
      history.push("/news")
    } else {
      if (!news.name || news._id !== newId) {
        dispatch(listNewsDetails(newId));
      } else {
        setName(news.name);
        setImage(news.image);
        setDescription(news.description);
       
      }
    }
  }, [dispatch, news, newId,successUpdate]);

  const submitHandle = (e) => {
    e.preventDefault();
    dispatch(
      updateNew({
        _id:newId,
        name,
        description,
        image,
      })
      );
      
    
  };

  return (
    <>
      <Toast />
      <section className="content-main" style={{ maxWidth: "1200px" }}>
        <form onSubmit={submitHandle}>
          <div className="content-header">
            <Link to="/news" className="btn btn-danger text-white">
              Go to News
            </Link>
            <h2 className="content-title">Update News</h2>
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
                  {/* {errorUpdate && (
                    <Message variant="alert-danger">{errorUpdate}</Message>
                  )} */}
                  {/* {loadingUpdate && <Loading />} */}
                  {loading ? (
                    <Loading />
                  ) : error ? (
                    <Message variant="alert-danger">{error}</Message>
                  ) : (
                    <>
                      <div className="mb-4">
                        <label htmlFor="product_title" className="form-label">
                          News title
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
                          value={image}
                          onChange={(e) => setImage(e.target.value)}
                        />
                      </div>
                        <img src={image} style={{width:"100%"}}/>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
     
    </>
  );
};

export default EditnewsMain;
