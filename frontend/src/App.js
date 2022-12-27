import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login/>
        </Route>
        <Route path="/register">
          <Register/>
        </Route>
        <Route path="/dashboard">
          <Dashboard/>
          {/* <UserList/> */}
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
//<Route path="add">
  //        {/* <AddUser/> */}
   //     </Route>
    //    <Route path="edit/:id">
     //     {/* <EditUser/> */}
      //  </Route>