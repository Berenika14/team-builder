import React, { useEffect, useState } from "react";
import { data } from "./Constants";
import TeamList from "./components/TeamList/TeamList";
import Form from "./components/Form/Form";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    console.log(data);
    setTeamMembers(data);
  }, []);

  return (
    <div className="container">
      <h1>Team Builder App</h1>
      <h2>Form App</h2>
      <Form team={teamMembers} setTeam={setTeamMembers} />
      <TeamList team={teamMembers} />
    </div>
  );
}

export default App;
