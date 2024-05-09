import logo from "./logo.svg";
import "./App.scss";
import "./../styles/demo.scss";
import MyConpoment from "./Example/myComponent";
import ListTodo from "./Todos/Listtodo";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from "./Nav/Nav";
import Home from "./Example/Home";

import { Routes, Route } from "react-router-dom";
/**
 * Có 2 components : Class component và function component !
 *  components sử dụng cú pháp JSX!
 *
 *
 *
 *
 */

function App() {
  return (

      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          {/* <Home/> */}
          {/* <MyConpoment/> */}
          {/* <ListTodo/> */}

          <Routes>
            <Route exact path="/" Component={Home} />
            <Route exact path="/todo" Component={ListTodo} />
            <Route exact path="/about" Component={MyConpoment} />
              
            
          </Routes>
        </header>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
   
  );
}

export default App;
