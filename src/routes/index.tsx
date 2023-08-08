import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import Error from "../pages/Error";
import Category from "../pages/Admin/Category";
import Type from "../pages/Admin/Type";
import User from "../pages/Admin/User";
import Home from "../pages/Home";
import MyPray from "../pages/MyPray";
import PrayFor from "../pages/PrayFor";
import Login from "../pages/Login";

const auth = true;

export const AppRoute = createBrowserRouter(
    [
        {
            path: "/",
            element: auth === true ? <Layout /> : <Login />,
            errorElement: <Error />,
            children:
                [
                    { path: "/home", element: <Home /> },
                    { path: "/mypray", element: <MyPray /> },
                    { path: "/prayfor", element: <PrayFor /> },
                    { path: "/admin/category", element: <Category /> },
                    { path: "/admin/type", element: <Type /> },
                    { path: "/admin/user", element: <User /> },

                ],
        }
    ]
)