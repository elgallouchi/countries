import { FaTwitterSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";
export default function Footer() {
  const { theme } = useContext(ThemeContext);
  return (
    <footer className={theme ? "footer-dark" : "footer-light"}>
      <div className="container">
        <div className="social-media">
          <a href="https://twitter.com/elgallouchi" target="_blank">
            <FaTwitterSquare /> Twitter
          </a>
          <a href="https://github.com/hassanelgallouchi" target="_blank">
            <FaGithubSquare /> Github
          </a>
          <a href="https://linkedin.com/in/hassanelgallouchi" target="_blank">
            <FaLinkedin /> Linkedin
          </a>
        </div>
        <p>© 2022 All Countries</p>
      </div>
    </footer>
  );
}
