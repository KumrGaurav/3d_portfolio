import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

//import Tilt from "react-tilt";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { styles } from "../styles";
import StarWrapper from "../hoc/StarWrapper";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

import { CTA } from "../components";
import { experiences, skills, services } from "../constants";

import "react-vertical-timeline-component/style.min.css";
import Hero from "../components/Hero";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt
    className="w-[250px] shrink-0 z-10"
    tiltMaxAngleX={15}
    tiltMaxAngleY={15}
    perspective={1000}
    transitionSpeed={500}
    scale={1.05}
    gyroscope={true}
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);
const About = () => {
  return (
    <>
      <Hero />
      {/* Anchor for scroll target */}
      <span id="intro" className="block h-0 mt-24" />
      <section className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        {/* Animated Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm sm:text-base uppercase font-semibold tracking-widest bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
            Introduction
          </p>

          <h2 className="text-4xl sm:text-5xl font-extrabold mt-2 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            Overview
          </h2>
        </motion.div>

        {/* Background Glow Animation */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
          <div className="absolute w-80 h-80 bg-gradient-to-br from-purple-500 via-pink-500 to-yellow-400 opacity-20 rounded-full animate-pulse top-10 left-10 blur-3xl" />
          <div className="absolute w-96 h-96 bg-gradient-to-tr from-indigo-500 via-blue-500 to-green-400 opacity-20 rounded-full animate-ping bottom-0 right-0 blur-3xl" />
        </div>

        {/* Paragraph with animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="mt-10 text-slate-300 text-base sm:text-lg leading-8 max-w-4xl mx-auto text-center backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-xl">
            Hi, I’m{" "}
            <span className="font-semibold text-cyan-400">Kumar Gaurav</span>, a
            passionate and skilled software developer with hands-on experience
            in building robust full-stack applications using Java, Spring Boot,
            ReactJS, NextJS, React-Native and modern web technologies. I
            specialize in scalable and user-centric solutions, and I’ve
            developed everything from dashboards and form builders to mobile
            apps and inventory systems.
            <br />
            <br />
            My technical stack includes JavaScript, Python, C++, REST APIs,
            SQL/MySQL, MongoDB, Firebase, Docker, AWS, and Azure. I bring
            real-world expertise from a 4-month internship and enjoy debugging,
            deploying, and writing clean, maintainable code. Currently, I’m open
            to full-time opportunities to contribute, learn, and build impactful
            products.
          </p>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center px-4 sm:px-6"
        >
          <p className="text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-sm sm:text-base uppercase font-semibold tracking-widest mb-2">
            What I Do
          </p>

          <h2 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            Services
          </h2>

          <p className="mt-4 text-base sm:text-lg max-w-2xl mx-auto text-slate-300">
            Here are the services I offer, designed to bring your ideas to life
            with speed, precision, and creativity.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row md:grid-cols-2 flex-wrap gap-10 justify-center items-center px-4 pb-4 relative z-0">
            {services.map((service, index) => (
              <ServiceCard key={service.title} index={index} {...service} />
            ))}
          </div>
        </motion.div>
      </section>

      <section className="max-container">
        <div className="flex flex-col items-center px-4">
          <h3 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 mb-8 animate-pulse">
            My Skills
          </h3>

          <div className="mt-16 flex flex-wrap justify-center gap-12">
            {skills.map((skill, index) => (
              <div
                className="block-container w-20 h-20 group scroll-tilt"
                key={skill.name}
                data-tooltip-id={`tooltip-${index}`}
                data-tooltip-content={skill.name}
                style={{
                  perspective: "1000px",
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="btn-back rounded-xl" />
                <div
                  className="btn-front rounded-xl flex justify-center items-center transition-transform duration-500 group-hover:scale-110"
                  style={{
                    transformStyle: "preserve-3d",
                    willChange: "transform",
                  }}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    const rotateY = ((x - centerX) / centerX) * 10;
                    const rotateX = ((centerY - y) / centerY) * 10;

                    e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform =
                      "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)";
                  }}
                >
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className="w-1/2 h-1/2 object-contain"
                    style={{
                      transform: "translateZ(30px)",
                      filter: "drop-shadow(0 0 5px rgba(147, 51, 234, 0.5))",
                    }}
                  />
                </div>

                {/* Tooltip Component */}
                <Tooltip
                  id={`tooltip-${index}`}
                  place="top"
                  style={{
                    backgroundColor: "#9333ea",
                    color: "#fff",
                    fontWeight: 500,
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <p className="text-sm sm:text-base text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 uppercase tracking-widest font-semibold">
              What I have done so far
            </p>

            <h3 className="text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 drop-shadow-md">
              Work Experience.
            </h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-5 text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed"
            >
              From internships to freelance gigs, I’ve explored and grown in
              multiple development environments. Here’s a summary of the
              hands-on experiences that shaped my skills and helped me evolve as
              a software developer.
            </motion.p>
          </motion.div>

          <div className="mt-12 flex">
            <VerticalTimeline>
              {experiences.map((experience, index) => (
                <VerticalTimelineElement
                  key={experience.company_name}
                  date={experience.date}
                  contentArrowStyle={{
                    borderRight: "7px solid #915EFF",
                    width: "100%",
                    maxWidth: "700px"
                  }}
                  iconStyle={{ background: experience.iconBg, color: "#fff" }}
                  dateClassName="!text-white text-sm font-semibold"
                  icon={
                    <div className="flex justify-center items-center w-full h-full">
                      <img
                        src={experience.icon}
                        alt={experience.company_name}
                        className="w-[60%] h-[60%] object-contain"
                      />
                    </div>
                  }
                  contentStyle={{
                    background: "rgba(255, 255, 255, 0.1)", // light transparent background
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    borderRadius: "16px",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                    color: "#fff",
                    padding: "20px",
                    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                    transition: "transform 0.3s ease-in-out",
                  }}
                >
                  <div>
                    <h3 className="text-white text-xl font-bold mb-1">
                      {experience.title}
                    </h3>
                    <p className="text-indigo-200 font-medium text-base mb-3">
                      {experience.company_name}
                    </p>
                  </div>

                  <ul className="list-disc ml-5 space-y-2">
                    {experience.points.map((point, index) => (
                      <li
                        key={`experience-point-${index}`}
                        className="text-white/80 font-normal text-sm"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        </div>

        <hr className="border-slate-200" />

        <CTA />
      </section>
    </>
  );
};
export default StarWrapper(About, "about");
//export default About;
