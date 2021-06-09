import React from "react";
import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <div className="not-found">
      <img src="/images/404.gif" alt="404" />
      <Link to="/characters">
        <button id="returnHome">Take Me Home</button>
      </Link>
    </div>
  );
}
