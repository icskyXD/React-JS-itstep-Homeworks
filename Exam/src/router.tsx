import { createBrowserRouter } from "react-router-dom";
import {Stock, Root, BuyingPage, SellPage, Info} from "./routes";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/stock",
        element: <Stock/>,
      },
      {
        path: "/buy",
        element: <BuyingPage/>,
      },
      {
        path: "/sell",
        element: <SellPage/>,
      },
      {
        path: "/info",
        element: <Info/>,
      },
    ],
  },
]);

export default router;