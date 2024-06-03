import Header from "../components/header/Header";
import Router from "../layouts/router/Router";
import Cart from "../pages/cart/Cart";
import HomePage from "../pages/homePage/HomePage";
import ProductDetail from "../pages/productDetail/ProductDetail";

const routesConfig = [
    {
        path: "/",
        element:<Router/>,
        children: [
            {
              path: "",
              element: <HomePage />,
            }
        ]
    },
    {
        path:"/productDetail/:id",
        element:<Router/>,
        children: [
            {
              path: "",
              element: <ProductDetail />,
            }
        ]
    },
    {
        path: "/cart",
        element: <Router></Router>,
        children: [
            {
              path: "",
              element: <Cart></Cart>,
            }
        ]
    }
]

export default routesConfig