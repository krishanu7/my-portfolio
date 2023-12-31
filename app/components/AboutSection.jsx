"use client";
import React, { useState, useTransition, useRef } from 'react';
import Image from 'next/image';
import TabButton from "./TabButton";
import { motion, useInView } from "framer-motion";

const Tab_data = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className='list-inside list-disc pl-2'>
        <li>Html, CSS</li>
        <li>Tailwind.css</li>
        <li>Javascript</li>
        <li>React, Next</li>
        <li>Node.js, Express.js</li>
        <li>MongoDB, MySQL, PostgreSQL</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className='list-inside list-disc pl-2'>
        <li>Rampurhat J.L Vidyabhaban</li>
        <li>Jadavpur University</li>
      </ul>
    )
  },
  {
    title: "CourseWork",
    id: "coursework",
    content: (
      <ul className='list-inside list-disc pl-2'>
        <li>DSA</li>
        <li>OOP</li>
        <li>DBMS</li>
        <li>OS</li>
        <li>CN</li>
      </ul>
    )
  }
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [pending, startTransitin] = useTransition();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const handleTabChange = (id) => {
    startTransitin(() => {
      setTab(id);
    });
  };

  return (
    <section className='text-white' id="about">
      <div ref={ref} className='grid grid-cols-1 md:grid-cols-2 items-center gap-8 py-9 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <motion.div 
        variants={cardVariants}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        transition={{ duration: 0.3, delay: 0.5 }}
        className='relative h-full'>
          <Image src="/images/about-image.png" alt="about image" width={500} height={500} />
        </motion.div>
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
          <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-orange-600">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
            Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className='flex flex-row justify-around mt-8'>
            <TabButton
              selectTab={() => handleTabChange('skills')}
              active={tab == "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange('education')}
              active={tab == "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange('coursework')}
              active={tab == "coursework"}
            >
              {" "}
              Course Work{" "}
            </TabButton>
          </div>
          <div className={`mt-7 mr-6 sm:mr-16 lg:mr-14 h-full flex flex-wrap ${tab === "education" ? 'justify-center' : tab === 'coursework' ? 'justify-end' : 'justify-start'}`}>
            {Tab_data.find((data) => data.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
