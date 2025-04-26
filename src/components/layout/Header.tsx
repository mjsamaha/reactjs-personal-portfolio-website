"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";


export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    return (
      <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
        <div className="header__container">
          <div className="header__left">
            <Link href="/" className="header__title">
              <span>Matthew Samaha</span>
            </Link>
            <div className="header__social">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="header__link header__link--icon"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://linkedin.com/in/"
                target="_blank"
                rel="noopener noreferrer"
                className="header__link header__link--icon"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
  
          <nav className="header__nav">
            <Link href="/gallery" className="header__link">Gallery</Link>
            <Link href="/projects" className="header__link">Projects</Link>
          </nav>
        </div>
      </header>
    );
  }