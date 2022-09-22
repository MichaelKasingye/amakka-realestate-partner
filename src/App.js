import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import Aos from "aos";

import "bootstrap/dist/js/bootstrap.bundle.min";
import Nav from "./Components/NavBar";
import Footer from "./Components/Footer";
import Modals from "./Components/Modals";
import Entries from "./Pages/Entries";
import EntriesDetails from "./Pages/EntriesDetails";
import Register from "./Pages/Register";
import Login from "./Pages/Login";

import Sidebar from "./Components/Sidebar";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Error from "./Pages/Error";
import "./App.css";
import { fetchClientInterestAsync } from "./redux/features/ClientInterest/ClientInterestSlice";
import { useDispatch } from "react-redux";

function App() {
  const isAllowed = false;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchClientInterestAsync());
    Aos.init({ duration: 900 });
  }, [dispatch]);

  return (
    <main id="main" className="main">
      {isAllowed ? (
        <BrowserRouter>
          <Nav />
          <Sidebar />

          <Routes>
            <Route index element={<Home />} />
            <Route path="/entries-page" element={<Entries />} />
            <Route
              path="/fetures-decription-page/:id"
              element={<EntriesDetails />}
            />
            <Route path="/about" element={<About />} />
            {/* <Route path="/register" element={<Register />} /> */}

            <Route path="*" element={<Error />} />
          </Routes>
          <Modals />
          <Footer />
        </BrowserRouter>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />

            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      )}
      
    </main>
  );
}

export default App;
