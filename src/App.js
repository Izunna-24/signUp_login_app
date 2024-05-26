import Register from "./pages/Register";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import './App.css';

function App() {
  return (
      <>
        <BrowserRouter>
          <Routes>
            <Route element ={<Login/>} path={'/login'}/>
              <Route element ={<Register/>} path={'/register'}/>
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;
