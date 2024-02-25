import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/Home/Home";
import Register from "../components/Form/Register";
import Login from "../components/Form/Login";
import AddTask from "../components/Task/AddTask";
import MyTask from "../components/Task/MyTask";
import UpdateTask from "../components/Task/UpdateTask";
import CompletedTask from "../components/Task/CompletedTask";
import Details from "../components/Task/Details";
import PrivateRoutes from "./PrivateRoutes";
import ErrorPage from "../components/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/addTask",
        element: (
          <PrivateRoutes>
            <AddTask></AddTask>
          </PrivateRoutes>
        ),
      },
      {
        path: "/myTask",
        element: <MyTask></MyTask>,
      },
      {
        path: "/updateTask/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/updateTask/${params.id}`),
        element: <UpdateTask></UpdateTask>,
      },
      {
        path: "/completedTask",
        element: <CompletedTask></CompletedTask>,
      },
      {
        path: "/details/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/details/${params.id}`),
        element: <Details></Details>,
      },
    ],
  },
]);
