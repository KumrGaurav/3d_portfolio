import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { CTA } from "../components";
import { projects } from "../constants";
import { arrow } from "../assets/icons";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const cardHover = {
  scale: 1.03,
  y: -10,
  transition: {
    type: "spring",
    stiffness: 300,
    damping: 15,
  },
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section className="max-container">
      <motion.h1
        className="head-text text-center"
        initial="hidden"
        animate="show"
        variants={fadeInUp}
      >
        My{" "}
        <span className="blue-gradient_text drop-shadow font-semibold">
          Projects
        </span>
      </motion.h1>

      <motion.p
        className="mt-6 max-w-3xl mx-auto text-center text-lg font-medium bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent leading-relaxed tracking-wide"
        initial="hidden"
        animate="show"
        variants={fadeInUp}
        custom={1}
      >
        I've worked on a range of creative and technical projects—each one a
        step forward in my journey. Many are open-source, so feel free to
        explore, fork, and contribute!
      </motion.p>

      <div className="flex flex-wrap justify-center gap-8 my-16">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="relative w-full sm:w-[calc(50%-32px)] rounded-3xl"
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            custom={index + 1}
          >
            <Tilt
              glareEnable={true}
              glareMaxOpacity={0.2}
              glareColor="#ffffff"
              glarePosition="all"
              scale={1.02}
              transitionSpeed={1500}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              className="rounded-3xl"
            >
              <motion.div
                className="group h-[500px] rounded-3xl overflow-hidden flex flex-col justify-between"
                whileHover={cardHover}
              >
                <div className="relative h-full">
                  {/* Dark Glass Effect */}
                  <div className="absolute inset-0 bg-black/30 backdrop-blur-md rounded-3xl border border-white/10 shadow-xl"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-900/10 via-gray-800/10 to-black/10 rounded-3xl"></div>
                  <div className="absolute inset-0.5 bg-black/10 rounded-[22px] backdrop-blur-sm"></div>

                  <div className="relative h-full flex flex-col p-6">
                    <div
                      className="relative mb-5 overflow-hidden rounded-xl border border-white/30 shadow-lg group-hover:shadow-xl transition-all duration-500 cursor-pointer"
                      onClick={() => openModal(project)}
                    >
                      <motion.img
                        src={
                          Array.isArray(project.imageSrc)
                            ? project.imageSrc[0]
                            : project.imageSrc
                        }
                        alt={project.title}
                        className="w-full h-40 object-cover rounded-xl"
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70 rounded-xl"></div>
                    </div>

                    <div className="flex-1 flex flex-col">
                      <h3 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                        {project.title}
                      </h3>

                      <p className="text-slate-300 text-sm leading-relaxed mb-3 line-clamp-3">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.skills.map((skill, i) => (
                          <motion.span
                            key={i}
                            className="text-xs bg-white/10 text-white px-3 py-1 rounded-full shadow-sm backdrop-blur-sm border border-white/20"
                            whileHover={{
                              y: -2,
                              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                            }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>

                      <div className="flex justify-between items-center pt-3 border-t border-white/20 mt-auto">
                        {project.demo && (
                          <motion.div whileHover={{ x: 3 }}>
                            <Link
                              to={project.demo}
                              target="_blank"
                              className="text-blue-400 font-medium hover:underline flex items-center gap-1"
                            >
                              Live Demo
                              <motion.img
                                src={arrow}
                                alt="arrow"
                                className="w-4 h-4"
                                animate={{ x: [0, 4, 0] }}
                                transition={{ repeat: Infinity, duration: 1.5 }}
                              />
                            </Link>
                          </motion.div>
                        )}
                        {project.source && (
                          <motion.div whileHover={{ x: 3 }}>
                            <Link
                              to={project.source}
                              target="_blank"
                              className="text-gray-400 hover:text-white font-medium flex items-center gap-1"
                            >
                              Source Code
                              <motion.img
                                src={arrow}
                                alt="arrow"
                                className="w-4 h-4"
                                animate={{ x: [0, 4, 0] }}
                                transition={{
                                  repeat: Infinity,
                                  duration: 1.5,
                                  delay: 0.2,
                                }}
                              />
                            </Link>
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Tilt>
          </motion.div>
        ))}
      </div>

      {/* Image Carousel Popup */}
      <AnimatePresence>
        {showModal && selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              className="relative max-w-4xl w-full max-h-[90vh] overflow-hidden"
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-full">
                <div className="absolute inset-0 bg-black/30 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/10"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/15 via-gray-800/15 to-black/15 rounded-3xl"></div>
                <div className="absolute inset-0.5 bg-black/20 rounded-[22px] backdrop-blur-sm"></div>

                <div className="relative p-1 h-full">
                  <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 z-50 w-8 h-8 flex items-center justify-center bg-white/80 rounded-full shadow-lg hover:bg-white transition-colors border border-white/30"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>

                  <Carousel
                    showThumbs={false}
                    infiniteLoop
                    autoPlay
                    interval={5000}
                    showStatus={false}
                    className="rounded-2xl overflow-hidden"
                  >
                    {selectedProject.imageSrc.map((src, idx) => (
                      <div
                        key={idx}
                        className="h-[70vh] flex items-center justify-center"
                      >
                        <motion.div
                          initial={{ scale: 0.95, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.5 }}
                          className="relative w-full h-full"
                        >
                          <img
                            src={src}
                            alt={`Screenshot ${idx + 1}`}
                            className="w-full h-full object-contain rounded-lg"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                        </motion.div>
                      </div>
                    ))}
                  </Carousel>

                  <motion.div
                    className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h3 className="text-2xl font-bold mb-2">
                      {selectedProject.title}
                    </h3>
                    <p className="text-white/80 mb-4">
                      {selectedProject.description}
                    </p>
                    <div className="flex gap-4">
                      {selectedProject.demo && (
                        <motion.a
                          href={selectedProject.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-white text-blue-600 rounded-lg font-medium flex items-center gap-2 hover:bg-blue-50 transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Live Demo
                        </motion.a>
                      )}
                      {selectedProject.source && (
                        <motion.a
                          href={selectedProject.source}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-white/10 text-white rounded-lg font-medium flex items-center gap-2 hover:bg-white/20 transition-colors border border-white/20"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Source Code
                        </motion.a>
                      )}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <hr className="border-slate-200 mt-10" />
      <CTA />
    </section>
  );
};

export default Projects;
