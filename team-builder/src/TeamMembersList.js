import React from "react";

const TeamMembersList = props => {
  return (
    <div className="team-list">
      {props.team.map(teamMember => (
        <div className="teamMember" key={teamMember.id}>
          <h2>{teamMember.name}</h2>
          <p>{teamMember.email}</p>
          <p>{teamMember.role}</p>
        </div>
      ))}
    </div>
  );
};

export default TeamMembersList;
