import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { UserSelector } from "../../redux/features/user/UserSlice";
// import { SidebarData } from "./Sidebar";
// import { IconContext } from "react-icons";
import SliderMenu from "./SliderMenu";
import Avatar from "../Avatar";

// import { useStateValue } from "./ContextAPI/StateProvider";

// import { auth } from "./Firebase/firebase";
// import { useHistory } from "react-router-dom";
// import "./navbar.css";
function Navbar() {
  const { User } = useSelector(UserSelector);
  // console.log(User?.photoURL);
  //   const history = useHistory();

  return (
    <>
      <nav className=" navbar navbar-expand-lg navbar-light bg-light  header fixed-top d-flex align-items-center">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Amaakka-Partner
          </Link>
          <div className="avatar">
          <Avatar name={User?.displayName} image={User?.photoURL}/>

          </div>
          

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <SliderMenu />
          </button>
        </div>
      </nav>

      {/* </header> */}
      {/* End Header */}
    </>
  );
}

export default Navbar;
