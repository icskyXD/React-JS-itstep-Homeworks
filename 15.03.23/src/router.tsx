import { createBrowserRouter } from "react-router-dom";
import { ErrorPage, MainPage, HelpPage, LoginPage } from "./routes";
import Header from "./routes/Header";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header/>,
    errorElement: <ErrorPage/>,
    children: [
      { path: "/", element: <MainPage/>},
      { path: "/login", element: <LoginPage/>},
      {path: "/help", element: <HelpPage/>}
    ],
  },
]);

export default router;
