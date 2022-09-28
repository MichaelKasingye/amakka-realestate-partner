import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { SidebarData } from "./SidebarData";
import { Link } from "react-router-dom";
import { Logout } from "../../services/gooleAuth";
import Avatar from "../Avatar";

import { useSelector } from "react-redux";
import { UserSelector } from "../../redux/features/user/UserSlice";

export default function OnActiveSideMenu() {
  const { User } = useSelector(UserSelector);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <nav className=" navbar navbar-expand-lg navbar-light bg-light  header fixed-top d-flex align-items-center">
      <span>Amaakka-Partner</span>
      <span className="navbar-toggler-icon mx-2" onClick={handleShow} />

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            {" "}
            <Avatar name={User?.displayName} image={User?.photoURL} />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {/* <h1>sdsds</h1> */}
          <ul className="sidebar-nav" id="sidebar-nav" onClick={handleClose}>
            <li className="nav-item">
              <Link className="nav-link " to="/">
                <i className="bi bi-grid" />
                <span>Overview</span>
              </Link>
            </li>
            {/* End Dashboard Overview */}

            <li className="nav-heading">Pages</li>
            {SidebarData.map((info, idx) => (
              <li className="nav-item" key={idx}>
                <Link className="nav-link collapsed" to={info.path}>
                  {info.icon}
                  <span>{info.title}</span>
                </Link>
              </li>
            ))}
          </ul>

          <button
            className="btn btn-dark px-4 w-100 rounded-1"
            type="submit"
            onClick={Logout}
            onHide={handleClose}
          >
            Sign out
          </button>
        </Offcanvas.Body>
      </Offcanvas>
    </nav>
  );
}
