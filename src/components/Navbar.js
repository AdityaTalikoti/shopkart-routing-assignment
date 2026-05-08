import React from "react";
import { link } from "react"

function Navbar() {
  return (
    <nav>
      {/* TODO: Replace <a> with Link */}
      
      <link href="/">Home</link>
      <link href="/about">About</link>
      <link href="/contact">Contact</link>
      
    </nav>
  );
}

export default Navbar;
