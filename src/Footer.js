import React from "react";
import "./Footer.css";

export default function Footer() {
  return(<footer className="Footer">
    <p>
      This project was coded by{" "}
      <a
        href="https://www.linkedin.com/in/anastasiia-zavorotynska-849972133/"
        target="_blank"
        rel="noreferrer"
        title="Link to Linkedin profile"
      >
        Anastasiia Zavorotynska
      </a>{" "}
      and it`s{" "}
      <a
        href="https://github.com/tinazavr/weather-react"
        target="_blank"
        rel="noreferrer"
        title="Link to GitHub"
      >
        open-soursed
      </a>{" "}
      on GitHub
    </p>
  </footer>)
}
