import React from "react";
import "./App.css";

// Data for the leaderboard
const teams = [
  { rank: 1, name: "Team1", score: 999 },
  { rank: 2, name: "Team2", score: 999 },
  { rank: 3, name: "Team3", score: 999 },
  { rank: 4, name: "Team4", score: 999 },
  { rank: 5, name: "Team5", score: 999 },
];

// Function to render a row
const Row = ({ rank, name, score, rowClass }) => {
  return (
    <div className={`row ${rowClass}`}>
      <div className="rank">{rank}</div>
      <div className="team-info">
        <div className="team-name">{name}</div>
        <div className="score">{score}</div>
      </div>
    </div>
  );
};

// Function to determine the row class based on index
const getRowClass = (index) => `row${index + 1}`;

const Leaderboard = () => {
  return (
    <div className="container">
      <div className="headerContainer">
        <div className="header">
          <div className="title">LeaderBoard</div>
        </div>
      </div>
      <div className="table">
        <div className="table-header">
          <div className="team-header-name">Team Name</div>
          <div className="score">Score</div>
        </div>
        {teams.map((team, index) => (
          <Row
            key={team.rank}
            rank={team.rank}
            name={team.name}
            score={team.score}
            rowClass={getRowClass(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
