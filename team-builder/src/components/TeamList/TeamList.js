import React from "react";
import "./index.css";
// import img from ".UserIcon.png";
const TeamList = (props) => {
  const { team } = props;
  return (
    <div className="team_list">
      {team.map((el, idx) => {
        return (
          <div className="card" key={idx}>
            <img
              src="https://www.icmetl.org/wp-content/uploads/2020/11/user-icon-human-person-sign-vector-10206693.png"
              alt="User Icon"
            />
            <h3> {el.name}</h3>
            <p>Email: {el.email}</p>
            <p>Role: {el.role}</p>
          </div>
        );
      })}
    </div>
  );
};

export default TeamList;
