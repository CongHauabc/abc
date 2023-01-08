import React, { useEffect, useState } from "react";
import Toast from "../LoadingError/Toast";
import { Link,useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editProduct, updateProduct } from "../../Redux/Actions/ProductAction";
import { PRODUCT_UPDATE_RESET } from "../../Redux/Constants/ProductConstant";
import { toast } from "react-toastify";
import Message from "../LoadingError/Error";
import Loading from "../LoadingError/Loading";
import { editLogo, updateLogo } from "../../Redux/Actions/logoAction";
import { LOGO_UPDATE_RESET } from "../../Redux/Constants/logoCanstant";

const ToastObjects = {
  pauseOnFocusLoss: false,
  draggable: false,
  pauseOnHover: false,
  autoClose: 2000,
};

const EditlogoMain = (props) => {
  const { logoId } = props;
  const history = useHistory()
  const [image, setImage] = useState(" ");

  const dispatch = useDispatch();

  const logoEdit = useSelector((state) => state.logoEdit);
  const { loading, error, logo } = logoEdit;


  const logoUpdate = useSelector((state) => state.logoUpdate);
  const {  loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,} = logoUpdate;

    useEffect(() => {
      if(successUpdate){
        dispatch({type:LOGO_UPDATE_RESET})
        toast.success("Logo Updated", ToastObjects);
      }else{
        if ( !logo.image || logo._id !== logoId) {
          dispatch(editLogo(logoId));
        } else {
          setImage(logo.image);
        }
      }

      
    }
  , [dispatch, logo, logoId,successUpdate]);

  const submitHandle = (e) => {
    e.preventDefault();
    dispatch(
      updateLogo({
        _id:logoId,
        image,
      })
    );
    history.push("/logo")
  };

  return (
    <>
      <Toast/>
      <section className="content-main" style={{ maxWidth: "1200px" }}>
        <form onSubmit={submitHandle}>
          <div className="content-header">
            <Link to="/products" className="btn btn-danger text-white">
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
                  <img src={image}/>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default EditlogoMain;
