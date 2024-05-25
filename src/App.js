import Signup from "./pages/Signup";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import './App.css';

function App() {
  return (
      <>
        <BrowserRouter>
          <Routes>
            <Route element ={<Login/>} path={'/login'}/>
              <Route element ={<Signup/>} path={'/signup'}/>
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;
