import React from "react";
import "./index.css";

const TeamList = (props) => {
  const { team } = props;
  return (
    <div className="team_list">
      {team.map((el, idx) => {
        return (
          <div className="card" key={idx}>
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
