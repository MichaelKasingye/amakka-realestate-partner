import { useEffect, useState } from "react";
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
import {
  getAuth,
  onAuthStateChanged,
} from 'firebase/auth';

const auth = getAuth();

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  // const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAllowed, setIsAllowed] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchClientInterestAsync());
    Aos.init({ duration: 900 });
  }, [dispatch]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
      if (user) {
        setIsAllowed(true)
      }
    });

    return unsubscribe;
  }, []);
console.log(currentUser);

  return (
    <main id="main" className="main">
      {currentUser ? (
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
