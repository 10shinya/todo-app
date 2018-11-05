import React from "react";
import { Link } from "react-router-dom";


export default function home() {
  return (
    <div>
      <div className="homewhole">
        <div className="gif"></div>
        <Link className="link" to="/todo">TodoApp</Link>
      </div>
    </div>
  );
}