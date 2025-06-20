import React from "react";
import { FaLinkedin, FaGithub, FaFigma } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="order-3 hidden md:block grid text-neutral-100 justify-items-center">
            <ul className="flex gap-5 pt-2">
                <li><FaLinkedin /></li>
                <li><FaGithub /></li>
                <li><FaFigma /></li>
            </ul>
            <p className="py-2 text-sm">DESIGNED BY JOHN IN FIGMA</p>
        </footer>
    );
}

export default Footer