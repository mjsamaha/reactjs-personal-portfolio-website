"use client";

import { useEffect, useRef } from 'react';
import { Container, SimpleGrid, Text, ThemeIcon } from '@mantine/core';
import { FaJava } from 'react-icons/fa';
import { SiSpringboot } from 'react-icons/si';
import { SiTypescript, SiNextdotjs } from 'react-icons/si';
import { IoSchoolOutline } from 'react-icons/io5';
import { MdWork } from 'react-icons/md';


const education = [
  {
    icon: <IoSchoolOutline size={30} />,
    title: 'Computer Systems Technology',
    description: 'Sheridan College, Expected Graduation 2027',
  },
  {
    icon: <IoSchoolOutline size={30} />,
    title: 'Relevant Coursework',
    description: 'Python ML & AI, Linux, Enterprise Java Development, Data Structures & Algortihms',
  },
];


const experience = [
  {
    icon: <MdWork size={30} />,
    title: 'Sailor',
    description: 'Canadian Armed Forces - Trained in signal communications...',
  },
  {
    icon: <MdWork size={30} />,
    title: 'Volunteer/Instructor',
    description: 'Oakville Sea Cadets - Currently peer-developping an inventory management system for the unit',
  },
];




const techStack = [
    {
      icon: <FaJava size={30} />,
      title: 'Java Development',
      description: 'Experience in Java development with focus on backend services and application architecture.',
    },
    {
      icon: <SiSpringboot size={30} />,
      title: 'Spring Boot',
      description: 'Building robust and scalable web applications the using Spring Boot framework.',
    },
    {
      icon: <SiTypescript size={30} />,
      title: 'TypeScript',
      description: 'Modern web development using TypeScript for type-safe and maintainable code.',
    },
    {
      icon: <SiNextdotjs size={30} />,
      title: 'Next.js',
      description: 'Creating performant and SEO-friendly web applications with React and Next.js framework.',
    },
  ];

  
export function FeatureSection() {
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
      const observer = new IntersectionObserver(
          (entries) => {
              entries.forEach((entry) => {
                  if (entry.isIntersecting) {
                      entry.target.classList.add('animate');
                  }
              });
          },
          { threshold: 0.1 }
      );

      itemsRef.current.forEach((item) => {
          if (item) observer.observe(item);
      });

      return () => observer.disconnect();
  }, []);

  const renderItems = (items: typeof techStack) => {
      return items.map((item) => (
          <div 
              className="item" 
              key={item.title}
              ref={el => { itemsRef.current.push(el); }}
          >
              <ThemeIcon 
                  variant="light" 
                  className="itemIcon" 
                  size={60} 
                  radius="md"
                  color="blue"
              >
                  {item.icon}
              </ThemeIcon>

              <div>
                  <Text fw={700} fz="lg" className="itemTitle">
                      {item.title}
                  </Text>
                  <Text c="dimmed">{item.description}</Text>
              </div>
          </div>
      ));
  };

  return (
      <Container size={700} className="wrapper">
          <Text className="supTitle">Technical Expertise</Text>
          <Container size={660} p={0}>
              <Text c="dimmed" className="description">
                  Experienced in building modern web applications with a focus on performance, 
                  scalability, and user experience using cutting-edge technologies.
              </Text>
          </Container>
          <SimpleGrid cols={{ base: 1, xs: 2 }} spacing={50} mt={30}>
              {renderItems(techStack)}
          </SimpleGrid>

          <Text className="supTitle" mt={50}>Education</Text>
          <SimpleGrid cols={{ base: 1, xs: 2 }} spacing={50} mt={30}>
              {renderItems(education)}
          </SimpleGrid>

          <Text className="supTitle" mt={50}>Professional Experience</Text>
          <SimpleGrid cols={{ base: 1, xs: 2 }} spacing={50} mt={30}>
              {renderItems(experience)}
          </SimpleGrid>

      </Container>
  );
}