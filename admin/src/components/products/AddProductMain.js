import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { PRODUCT_CREATE_RESET } from "../../Redux/Constants/ProductConstant";
import { createProduct } from "./../../Redux/Actions/ProductAction";

import Toast from "./../LoadingError/Toast";
import Message from "./../LoadingError/Error";
import Loading from "./../LoadingError/Loading";
import { listCategory } from "../../Redux/Actions/categoryAction";

const ToastObjects = {
  pauseOnFocusLoss: false,
  draggable: false,
  pauseOnHover: false,
  autoClose: 2000,
};
const AddProductMain = () => {
  const [val, setVal] = useState({
    name: ' ',
    price: ' ',
    description: ' ',
    image: ' ',
    countInStock: ' ',
    category:' ',
    })
  // const [name, setName] = useState("");
  // const [price, setPrice] = useState(0);
  // const [description, setDescription] = useState("");
  // const [image, setImage] = useState("");
  // const [countInStock, setCountInStock] = useState("");
  // const [categorys, setCategorys] = useState("");


  const dispatch = useDispatch();

  const productCreate = useSelector((state) => state.productCreate);
  const { loading, error, product } = productCreate;

  const categoryList = useSelector((state) => state.categoryList);
  const { category } = categoryList;
  const categoryhandle = (e)=>{
    console.log(e.target.value);
  }
  useEffect((e)=>{
    dispatch(listCategory());
  },[])
  useEffect(() => {
    if (product) {
      toast.success("Product added", ToastObjects);
      dispatch({ type: PRODUCT_CREATE_RESET });
      setVal({
        name: ' ',
        price: ' ',
        description: ' ',
        image: ' ',
        countInStock: ' ',
        category:' '
      })
    }
  }, [dispatch, product]);

  const submitHandler = (e) => {
    e.preventDefault();
    
    dispatch(createProduct(JSON.stringify(val)));
  };

  const handleChange = (e) => {
    setVal({...val, [e.target.name]: e.target.value})
    console.log(val)
    }
    const onSubmit = (e) => {
      e.preventDefault()
      console.log(val)
      dispatch(createProduct(val));
      }
const cate =()=>{
}
  return (
    <>
      <Toast />
      <section className="content-main" style={{ maxWidth: "1200px" }}>
        <form onSubmit={onSubmit}>
          <div className="content-header">
            <Link to="/products" className="btn btn-danger text-white">
              Go to products
            </Link>
            <h2 className="content-title">Add product</h2>
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
                      name='name' onChange={handleChange} 
                    />
                  </div>
                  <div className="mb-4">
                    <select onChange={handleChange} name='category'>
                      <option value="">Choose Category</option>
                      {category.map((cate) => (
                        <option key={cate._id} value={cate.name}  onChange={handleChange} >
                          {cate.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="product_price" className="form-label">
                      Price
                    </label>
                    <input
                      type="number"
                      placeholder="Type here"
                      className="form-control"
                      id="product_price"
                      required
                      name='price' onChange={handleChange} 
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="product_price" className="form-label">
                      Count In Stock
                    </label>
                    <input
                      type="number"
                      placeholder="Type here"
                      className="form-control"
                      id="product_price"
                      required
                     
                      name='countInStock' onChange={handleChange} 
                    />
                  </div>
                  <div className="mb-4">
                    <label className="form-label">Description</label>
                    <textarea
                      placeholder="Type here"
                      className="form-control"
                      rows="7"
                      required
                     
                      name='description' onChange={handleChange} 
                    ></textarea>
                  </div>
                  <div className="mb-4">
                    <label className="form-label">Images</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Inter Image URL"
                      
                      name='image' onChange={handleChange} 

                    />
                    <input className="form-control mt-3" type="file" />
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </form>
        
      </section>
    </>
  );
};

export default AddProductMain;
