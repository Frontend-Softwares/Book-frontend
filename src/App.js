import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import GetKey from "./pages/guest/GetKey";
import { ToastContainer } from "react-toastify";
import Topbaar from "./components/Topbaar";
import Entrance from "./pages/guest/Entrance/Entrance";
import Module from "./contexts/modules";
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
          </Routes>
        </Router>
      </Module>
    </div>
  );
}

export default App;
