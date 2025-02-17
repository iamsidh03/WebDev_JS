//import React, { useState, useEffect } from "react";

// Clock Heading Component

// Clock Slogan Component

// Current Time Component
import React from "react";
import currentTime from "./components/currentTime";
import clockHeading from "./components/clockHeading";
import clockSlogan from "./components/clockSlogan";
// Main App Component
const BharatClock = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100 p-5">
      <clockHeading />
      <clockSlogan />
      <currentTime />
    </div>
  );
};

export default BharatClock;
