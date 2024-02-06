import React from "react";
import Interfaces from "./components/cart1";
import Signin from "./components/signin";
import {BrowserRouters as Router,Routes, Route} from "react-router-dom";

 const App = () => {

  return(
    <div className=" ">
      <Router>
        <Interfaces/>
        <Routes>
          <route path='/signin' element={<Signin/>} />
        </Routes>

      </Router>
    </div>

  )

}
export default App;