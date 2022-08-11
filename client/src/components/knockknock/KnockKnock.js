import React, { useState } from "react";

const KnockKnock = () => {
  const [greeting, setGreeting] = useState(null);
  return (
    <div
      style={{
        display: "grid",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <h1>{greeting === null ? "Knock on Server Door!" : greeting}</h1>
      <br />
      <button
        onClick={() => {
          fetch("http://localhost:3001/api/greeting") //fetch from backend
            .then((res) => res.json()) //parse response as json
            .then((data) => setGreeting(data.greeting)) //update greeting state
            .catch((err) => console.log(err)); //log error if any
        }}
      >
        Knock Knock !
      </button>
    </div>
  );
};

export default KnockKnock;
