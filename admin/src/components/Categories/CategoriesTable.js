import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteCategory, listCategory } from "../../Redux/Actions/categoryAction";
import Message from "../LoadingError/Error";
import Loading from "../LoadingError/Loading";

const CategoriesTable = () => {
  const dispatch = useDispatch();
  const categoryList = useSelector((state) => state.categoryList);
  const { loading,errorDelete,category } = categoryList;
  const deletehandler = (id)=>{
    if(window.confirm("Are you sure ??")){
      dispatch(deleteCategory(id))
    }
  }
  useEffect((e) => {
    dispatch(listCategory());
  }, []);
  return (
    <div className="col-md-12 col-lg-8">
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name Category</th>
            <th className="text-end">Action</th>
          </tr>
        </thead>
        {/* Table Data */}
        {errorDelete && (<Message variant="alert-danger" >{errorDelete}</Message>) }
      {
        loading ? (<Loading/>) : errorDelete ? (<Message variant="alert-danger" >{errorDelete}</Message>):
        (
          <tbody>
          {category.map((data) => (
            <tr>
              <td>{data._id}</td>
              <td>
                <b>{data.name}</b>
              </td>

              <td className="text-end">
                <div className="dropdown">
                  <Link
                    to="#"
                    data-bs-toggle="dropdown"
                    className="btn btn-light"
                  >
                    <i className="fas fa-ellipsis-h"></i>
                  </Link>
                  <div className="dropdown-menu">
                      <Link className="dropdown-item" to='#'>
                      Edit info
                    </Link>
                    <Link onClick={()=>deletehandler(data._id)} className="dropdown-item text-danger" to="#">
                      Delete
                    </Link>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
        )}
        
      </table>
    </div>
  );
};

export default CategoriesTable;
