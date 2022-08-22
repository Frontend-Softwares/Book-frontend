import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import GetKey from "./pages/guest/GetKey";
import { ToastContainer } from "react-toastify";
import Topbaar from "./components/Topbaar";
import Entrance from "./pages/guest/Entrance/Entrance";
import Module from "./contexts/modules";
import NewKey from "./pages/guest/NewKey";
import ResetPassword from "./pages/guest/ResetPassword";
import Terms from "./pages/guest/Softwares/Terms";
import Conditions from "./pages/guest/Softwares/Conditions";
import Home from "./pages/protected/Home";
function App() {
  return (
    <div className="App">

    <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <Module>
        <Router>
          <Topbaar/>
          <Routes>
            <Route path="/" exact element={<GetKey />} />
            <Route path="/entrance" exact element={<Entrance />} />
            <Route path="/new_key" exact element={<NewKey />} />
            <Route path="/reset_password" exact element={<ResetPassword />} />
            <Route path="/terms" exact element={<Terms />} />
            <Route path="/conditions" exact element={<Conditions />} />
            <Route path="/dashboard" exact element={<Home />} />
          </Routes>
        </Router>
      </Module>
    </div>
  );
}

export default App;
