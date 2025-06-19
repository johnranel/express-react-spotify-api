import React from "react";
import { FaLinkedin, FaGithub, FaFigma } from "react-icons/fa";

const Footer = () => {
    return (
        <footer class="order-3 hidden md:block grid text-neutral-100 justify-items-center">
            <ul class="flex gap-5 pt-2">
                <li><FaLinkedin /></li>
                <li><FaGithub /></li>
                <li><FaFigma /></li>
            </ul>
            <p class="py-2 text-sm">DESIGNED BY JOHN IN FIGMA</p>
        </footer>
    );
}

export default Footer