import React, { useState } from "react";

import "./App.css";
import Form from "./Form";
import TeamMembersList from "./TeamMembersList";

function App() {
  const [teamMembers, setTeamMembers] = useState([]);

  const addTeamMemberHandler = newTeamMember => {
    console.log("adding team member", newTeamMember);
    setTeamMembers([...teamMembers, newTeamMember]);
  };

  return (
    <div className="App">
      <h1>Team Members</h1>
      <Form addTeamMember={addTeamMemberHandler} />
      <TeamMembersList team={teamMembers} />
    </div>
  );
}

export default App;
