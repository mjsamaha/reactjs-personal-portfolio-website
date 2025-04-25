"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
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
          <Link href="/" className="header__title">
            <span>Matthew Samaha</span>
          </Link>
  
          <nav className="header__nav">
            <Link href="/gallery" className="header__link">Gallery</Link>
            <Link href="/projects" className="header__link">Projects</Link>
            <Link href="/about" className="header__link">About</Link>
          </nav>
        </div>
      </header>
    );
  }