import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/Home/Home";
import Register from "../components/Form/Register";
import Login from "../components/Form/Login";
import AddTask from "../components/Task/AddTask";
import MyTask from "../components/Task/MyTask";
import UpdateTask from "../components/Task/UpdateTask";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    // errorElement: <ErrorPage></ErrorPage>,
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
        element: <AddTask></AddTask>,
      },
      {
        path: "/myTask",
        element: <MyTask></MyTask>,
      },
      {
        path: '/updateTask/:id',
        loader: ({ params }) => fetch(`http://localhost:5000/updateTask/${params.id}`),
        element: <UpdateTask></UpdateTask>
    },
    ],
  },
]);
