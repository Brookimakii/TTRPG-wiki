import './App.css';
import {RouterProvider} from "react-router-dom";
import {router} from "./router/routes";

export default App;

function App() {
  return (
    <div className="inner typography line">
      {/*<script src="javascript/secondaryToggle"></script>*/}
      <RouterProvider router={router}/>
    </div>
  )
}
