import React from "react";
import "./styles.css";
import { Logo } from "../Logo";

export function Header() {
  return (
    <header>
      <div className="dsmeta-logo-container">
        <Logo />
        <h1>DSMeta</h1>
        <p>
          Desenvolvido por
          <a href="https://www.instagram.com/devsuperior.ig">@lucasswyverr</a>
        </p>
      </div>
    </header>
  );
}
