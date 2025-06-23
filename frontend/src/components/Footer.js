import React from "react";
import { FaLinkedin, FaGithub, FaFigma } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="order-3 hidden md:block grid text-neutral-100 justify-items-center">
            <ul className="flex gap-5 pt-2">
                <li><a href="https://www.linkedin.com/in/john-ranel-dimaculangan-711239170/" target="_blank"><FaLinkedin /></a></li>
                <li><a href="https://github.com/johnranel/express-react-spotify-api" target="_blank"><FaGithub /></a></li>
                <li><a href="https://www.figma.com/design/r9LumIsWhiRsJpCYoRmdfV/Spotify-Profile-API?node-id=0-1&t=xvIYRJYLT8tTs97x-1" target="_blank"><FaFigma /></a></li>
            </ul>
            <p className="py-2 text-sm">DESIGNED BY JOHN IN FIGMA</p>
        </footer>
    );
}

export default Footer