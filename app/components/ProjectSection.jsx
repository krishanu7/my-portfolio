"use client";
import React, { useState, useRef } from 'react';
import ProjectTag from "./ProjectTag";
import ProjectCard from "./ProjectCard"
import { motion, useInView } from "framer-motion";

const projectData = [
  {
    id: 1,
    title: "Protfolio Website",
    description: "Personal portfolio website showcasing my web development projects and skills.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/krishanu7/my-portfolio",
    previewUrl: "https://my-portfolio-git-main-krishanu7s-projects.vercel.app/",
  },
  {
    id: 2,
    title: "Chatopia",
    description: "A realtime chat application that allows multiple users to join and chat.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/krishanu7/Chatopia_Frontend",
    previewUrl: "https://gentle-muffin-4e47ae.netlify.app/",
  },
  {
    id: 3,
    title: "Rat In A Maze",
    description: "A web application that allows you to visualize the famous Rat in a Maze problem.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/krishanu7/Rat-In-Maze-Visualization",
    previewUrl: "https://rat-in-maze-visualizer.netlify.app",
  },
  {
    id: 4,
    title: "Tic Tac Toe",
    description: "Classic Tic Tac Toe game built with React.",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/krishanu7/Tic-Tac-Toe",
    previewUrl: "https://tic-tac-toe-by-krishanu.netlify.app",
  }, {
    id: 5,
    title: "Banking System",
    description: "A banking system implemented in C++ using Object-Oriented Programming principles.",
    image: "/images/projects/5.png",
    tag: ["All", "OOP"],
    gitUrl: "https://github.com/krishanu7/Bank_Management_System_OOPS",
    previewUrl: "/",
  }
]

const ProjectSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const filteredProjects = projectData.filter((project) => project.tag.includes(tag));

  return (
    <section id="projects">
      <h2 className='text-center text-4xl font-bold mt-4 mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-400'>
        My Projects
      </h2>
      <div className='flex flex-row text-white justify-center items-center gap-4 py-6'>
        <ProjectTag onClick={handleTagChange} name="All" active={tag === "All"} />
        <ProjectTag onClick={handleTagChange} name="Web" active={tag === "Web"} />
        <ProjectTag onClick={handleTagChange} name="OOP" active={tag === "OOP"} />
      </div>
      <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12' >
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectSection;
