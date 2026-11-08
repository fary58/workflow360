import React from "react";

interface WelcomeProps {
  name: string;
  role: string;
}

function Welcome({ name, role }: WelcomeProps) {
  return (
    <div>
      <h1>Welcome {name}! </h1>
      <h2>role:{role}</h2>
    </div>
  );
}

export default Welcome;
