import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  ClientInterestSelector,
  updateClientInterestAsync,
} from "../../redux/features/ClientInterest/ClientInterestSlice";
import {PlaceHoldersParagraphs} from '../Widget/PlaceHolders'
import { CSVLink } from "react-csv";

export default function Index() {
  const { ClientInterest, loading } = useSelector(ClientInterestSelector);
  const dispatch = useDispatch();

console.log(loading);

  const ClientData = ClientInterest.map((info) => ({
    Name: info.data.name,
    Phone_Number: info.data.phoneNumber,
    Email: info.data.email,
    Project: info.unit.title,
    Bedrooms_no: info.unit.bedrooms,
    Status: info.status,
  }));

  function upDateFieldData(id, statusValue) {
    dispatch(updateClientInterestAsync(id, { status: statusValue }));
  }
  // console.log(ClientInterest);

  const tableHeadings = [
    // "Date",
    "Name",
    "Tel-No",
    "Email",
    "Unit",
    "Bedrooms",
    "Status",
  ];
  return (
    <div style={{ margin: "150px 0 20px 0" }} className="table-responsive">
      <CSVLink
        data={ClientData}
        filename={"Amaakka-Partner-leads.csv"}
        className="btn btn-secondary fw-bold"
      >
        Download as File
      </CSVLink>
      {!loading ? (
        <table className="table table-hover">
          <thead>
            <tr>
              <th>#</th>

              {tableHeadings.map((headings, idx) => (
                <th key={idx}>{headings}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ClientInterest?.map((info, idx) => (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{info.data.name}</td>
                <td>{info.data.phoneNumber}</td>
                <td>{info.data.email}</td>
                <td>{info.unit.title}</td>
                <td>{info.unit.bedrooms}</td>
                <td>
                  <div className="filter">
                    <span className="icon" data-bs-toggle="dropdown">
                      {!info.status ? "None" : info.status}
                    </span>
                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                      <span
                        className="dropdown-item"
                        onClick={() => upDateFieldData(info.id, "Interested")}
                      >
                        Interested
                      </span>
                      <span
                        className="dropdown-item"
                        onClick={() => upDateFieldData(info.id, "Declined")}
                      >
                        Declined
                      </span>
                      <span
                        className="dropdown-item"
                        onClick={() => upDateFieldData(info.id, "Not Sure")}
                      >
                        Not Sure
                      </span>
                      <span
                        className="dropdown-item"
                        onClick={() => upDateFieldData(info.id, "Booked")}
                      >
                        Booked
                      </span>
                      <span
                        className="dropdown-item"
                        onClick={() => upDateFieldData(info.id, "Down Payment")}
                      >
                        Down Payment
                      </span>
                      <span
                        className="dropdown-item"
                        onClick={() => upDateFieldData(info.id, "Purchased")}
                      >
                        Purchased
                      </span>
                    </ul>
                  </div>
                </td>
                <td>
                  {" "}
                  <div className="filter">
                    <Link className="icon" to="/" data-bs-toggle="dropdown">
                      <i className="bi bi-three-dots" />
                    </Link>
                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                      <li className="dropdown-header text-start">
                        <h6>Options</h6>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/fetures-decription-page/:id"
                        >
                          View
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/">
                          Edit
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/">
                          Delete
                        </Link>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <PlaceHoldersParagraphs/>
      )}
    </div>
  );
}
