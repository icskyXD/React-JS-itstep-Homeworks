import { createBrowserRouter } from "react-router-dom";
import {StockPage, MainPage, Nav, ActionPage} from "./routes";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Nav/>,
    children: [
      {
        path: "/",
        element: <MainPage/>,
      },
      {
        path: "/stock",
        element: <StockPage/>,
      },
      {
        path: "/actions",
        element: <ActionPage/>,
      }
    ],
  },
]);

export default router;