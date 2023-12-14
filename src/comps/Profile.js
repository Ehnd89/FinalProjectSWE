import React from "react";
import { useNavigate } from "react-router-dom";
import "./profile.css";

function Profile() {
  const currentUser = localStorage.getItem("user");
  //   console.log("fromProfile", currentUser);

  const parseUser = JSON.parse(currentUser);
  const navigate = useNavigate();

  console.log("profile", parseUser);

  return (
    <>
      <button></button>
      <div className="ProfileSection">
        <div className="sectionOne">
          <div className="top-info">
            <p className="Name">{parseUser.name}</p>
            <button
              className="edit"
              onClick={(e) => {
                navigate("/setup", { state: parseUser });
              }}
            >
              Edit
            </button>
          </div>
          <div className="sub-sectionOne">
            <p className="info">Major: {parseUser.major}</p>
            <p className="info">Minor: {parseUser.minor}</p>
          </div>
          <div className="sub-sectionOne">
            <p className="info">
              Expected Graduation Date: {parseUser.graduation_month}{" "}
              {parseUser.graduation_year}
            </p>
            <p className="info">Field: Technology</p>
          </div>

          {/* <div className="grey-line"></div> */}
        </div>

        {/* <h2>
          major: "Computer Science", minor: "None", Expected Graduation: May
          2024, field: "Technology",
        </h2>
        <p></p> */}
      </div>
    </>
  );
}

export default Profile;