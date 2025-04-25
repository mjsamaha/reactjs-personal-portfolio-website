"use client";

import Image from 'next/image';


export default function HeroImage() {
    return (
      <section className="hero">
        <div className="hero__image-container">
          <Image
            src="/images/RedTailedHawk.jpg"
            alt="Featured Bird Photography"
            fill
            priority
            className="hero__image"
          />
          <div className="hero__overlay" />
        </div>
        <div className="hero__content">
          <h1 className="hero__title">Matthew Samaha Portfolio</h1>
          <p className="hero__subtitle">Capturing Nature&apos;s Winged Wonders</p>
        </div>
      </section>
    );
  }