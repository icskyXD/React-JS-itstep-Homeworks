import router from "../router";
import {RouterProvider} from 'react-router-dom';

const App = () => {

  return(
    <>
      <h1>Javascript book</h1>
      <RouterProvider router={router} />
    </>
  )

}

export default App