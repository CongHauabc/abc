import React,{useState,useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { createCategory } from "../../Redux/Actions/categoryAction";
import { CATEGORY_CREATE_RESET } from "../../Redux/Constants/categoryContant";
import Message from "../LoadingError/Error";
import Loading from "../LoadingError/Loading";
const ToastObjects = {
  pauseOnFocusLoss: false,
  draggable: false,
  pauseOnHover: false,
  autoClose: 2000,
};
const   CreateCategory = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const categoryCreate = useSelector((state) => state.categoryCreate);
  const { loading, error, category } = categoryCreate;
  useEffect(()=>{
    if(category){
      toast.success("Category Added",ToastObjects)
      dispatch({type:CATEGORY_CREATE_RESET})
      setName("")
    }
  },[category,dispatch])
  const submitHandler = (e)=>{
    e.preventDefault();
    dispatch(createCategory(name))
  }
  
  return (
    <div className="col-md-12 col-lg-4">
      <form onSubmit={submitHandler}>
      {error && <Message variant="alert-danger">{error}</Message>}
                  {loading && <Loading />}
        <div className="mb-4">
          <label htmlFor="product_name" className="form-label">
            Name Category
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="form-control py-3"
            id="product_name"
            required
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />
        </div>
       

        <div className="d-grid">
          <button  className="btn btn-primary py-3">Create category</button>
        </div>
      </form>
    </div>
  );
};

export default CreateCategory;
