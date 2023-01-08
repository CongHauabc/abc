import React, { useEffect } from "react";
import "./App.css";
import "./responsive.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/productScreen";
import CategoriesScreen from "./screens/CategoriesScreen";
import OrderScreen from "./screens/OrderScreen";
import OrderDetailScreen from "./screens/OrderDetailScreen";
import AddProduct from "./screens/AddProduct";
import Login from "./screens/LoginScreen";
import UsersScreen from "./screens/UsersScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import NotFound from "./screens/NotFound";
import PrivateRouter from "./PrivateRouter";
import { useDispatch, useSelector } from 'react-redux';
import { listProduct } from "./Redux/Actions/ProductAction";
import { listOrders } from './Redux/Actions/OrderAction';
import LogoScreen from "./screens/LogoScreen";
import LogoEditScreen from "./screens/LogoEditScreen";
import BannerScreen from "./screens/BannerScreen";
import BannerEditScreen from './screens/BannerEditScreen';
import AddBanner from "./screens/AddBanner";
import newsScreen from "./screens/newsScreen";
import NewsEditScreen from "./screens/NewsEditScreen";
import AddNews from "./screens/AddNews";

function App() {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listProduct());
      dispatch(listOrders());
    }
  }, [dispatch, userInfo]);

  return (
    <>
      <Router>
        <Switch>
          <PrivateRouter path="/" component={HomeScreen} exact />
          <PrivateRouter path="/products" component={ProductScreen} />
          <PrivateRouter path="/category" component={CategoriesScreen} />
          <PrivateRouter path="/orders" component={OrderScreen} />
          <PrivateRouter path="/order/:id" component={OrderDetailScreen} />
          <PrivateRouter path="/addproduct" component={AddProduct} />
          <PrivateRouter path="/addbanner" component={AddBanner} />
          <PrivateRouter path="/addnews" component={AddNews} />
          <PrivateRouter path="/users" component={UsersScreen} />
          <PrivateRouter path="/product/:id/edit" component={ProductEditScreen} />
          <PrivateRouter path="/news/:id/edit" component={NewsEditScreen} />
          <Route path="/login" component={Login} />
          <PrivateRouter path="/logo/:id/edit" component={LogoEditScreen} />
          <PrivateRouter path="/banner/:id/edit" component={BannerEditScreen} />
          <PrivateRouter path="/logo" component={LogoScreen} />
          <PrivateRouter path="/banner" component={BannerScreen} />
          <PrivateRouter path="/news" component={newsScreen} />


          <PrivateRouter path="*" component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
