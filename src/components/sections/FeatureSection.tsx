"use client";

import { Container, SimpleGrid, Text, ThemeIcon } from '@mantine/core';
import { FaJava } from 'react-icons/fa';
import { SiSpringboot } from 'react-icons/si';
import { SiTypescript, SiNextdotjs } from 'react-icons/si';


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
    const items = techStack.map((item) => (
        <div className="item" key={item.title}>
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
            {items}
          </SimpleGrid>
        </Container>
      );
  }