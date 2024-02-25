import { Toaster } from "react-hot-toast";
import "./App.css";
import { router } from "./routes/Routes";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
