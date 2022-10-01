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
import { useDispatch, useSelector } from "react-redux";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { ProtectedRoute } from "./Route/ProtectedRoutes";
import Code from "./Pages/Code";
import { fetchUserAsync, UserSelector } from "./redux/features/user/UserSlice";

const auth = getAuth();

function App() {
  const { User } = useSelector(UserSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchClientInterestAsync());
    Aos.init({ duration: 900 });
  }, [dispatch]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      dispatch(fetchUserAsync(user));
    });

    return unsubscribe;
  }, [dispatch, User]);

  return (
    <main id="main" className="main">
      <BrowserRouter>
        {User?.email && <Nav />}
        {User?.email && <Sidebar />}

        <Routes>
          <Route element={<ProtectedRoute user={User} />}>
            <Route index element={<Home />} />
            <Route path="/entries-page" element={<Entries />} />
            <Route path="/access" element={<Code />} />

            <Route
              path="/fetures-decription-page/:id"
              element={<EntriesDetails />}
            />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Error />} />
          </Route>

          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Modals />
        {User && <Footer />}
      </BrowserRouter>
    </main>
  );
}

export default App;
