import Header from "../components/header/Header";
import Router from "../layouts/router/Router";
import Cart from "../pages/cart/Cart";
import Computer from "../pages/category/computer/Computer";
import Smart from "../pages/category/smart/Smart";
import Watch from "../pages/category/watch/Watch";
import HomePage from "../pages/homePage/HomePage";
import ProductDetail from "../pages/productDetail/ProductDetail";

const routesConfig = [
  {
    path: "/",
    element: <Router />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
    ],
  },
  {
    path: "/productDetail/:id",
    element: <Router />,
    children: [
      {
        path: "",
        element: <ProductDetail />,
      },
    ],
  },
  {
    path: "/cart",
    element: <Router></Router>,
    children: [
      {
        path: "",
        element: <Cart></Cart>,
      },
    ],
  },
  {
    path: "/Smart",
    element: <Router></Router>,
    children: [
      {
        path: "",
        element: <Smart></Smart>,
      },
    ],
  },
  {
    path: "/Watch",
    element: <Router></Router>,
    children: [
      {
        path: "",
        element: <Watch></Watch>,
      },
    ],
  },
  {
    path: "/Computer",
    element: <Router></Router>,
    children: [
      {
        path: "",
        element: <Computer></Computer>,
      },
    ],
  },
];

export default routesConfig;
