import React, { useEffect, useState } from "react";
import Toast from "../LoadingError/Toast";
import { Link,useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { toast } from "react-toastify";
import Message from "../LoadingError/Error";
import Loading from "../LoadingError/Loading";

import { editBanner, updateBanner } from "../../Redux/Actions/bannerAction";
import { BANNER_UPDATE_RESET } from "../../Redux/Constants/bannerConstant";

const ToastObjects = {
  pauseOnFocusLoss: false,
  draggable: false,
  pauseOnHover: false,
  autoClose: 2000,
};

const EditbannerMain = (props) => {
  const { bannerId } = props;
  const history = useHistory()
  const [image, setImage] = useState(" ");

  const dispatch = useDispatch();

  const bannerEdit = useSelector((state) => state.bannerEdit);
  const { loading, error, banner} = bannerEdit;


  const bannerUpdate = useSelector((state) => state.bannerUpdate);
  const {  loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,} = bannerUpdate;

    useEffect(() => {
      if(successUpdate){
        dispatch({type:BANNER_UPDATE_RESET})
        toast.success("Logo Updated", ToastObjects);
      }else{
        if ( !banner.image || banner._id !== bannerId) {
          dispatch(editBanner(bannerId));
        } else {
          setImage(banner.image);
        }
      }

      
    }
  , [dispatch, banner, bannerId,successUpdate]);
  const submitHandle = (e) => {
    e.preventDefault();
    dispatch(updateBanner({_id:bannerId,image}));
    history.push("/banner")
  };
  return (
    <>
      <Toast/>
      <section className="content-main" style={{ maxWidth: "1200px" }}>
        <form onSubmit={submitHandle}>

          <div className="content-header">
            <Link to="/banner" className="btn btn-danger text-white">
              Go to Logo
            </Link>
            <h2 className="content-title">Update Logo</h2>
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
                {errorUpdate && (
                    <Message variant="alert-danger">{errorUpdate}</Message>
                  )}
                  {loadingUpdate && <Loading />}
                  {loading ? (
                    <Loading />
                  ) : error ? (
                    <Message variant="alert-danger">{error}</Message>
                  ) : (
                    <div className="mb-4">
                        <label className="form-label">Images</label>
                        <input
                          className="form-control"
                          type="text"
                          required
                          value={image}
                          onChange={(e) => setImage(e.target.value)}
                        />
                      </div>
                  )}
                
                </div>

                <div style={{textAlign:"center"}}>
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

export default EditbannerMain;
