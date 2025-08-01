import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const headingText = "Hi, I'm ";

const Hero = () => {
  return (
    <section className={`relative w-full h-[120vh] mx-auto`}>
      <div
        className={`absolute inset-0 top-[100px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="relative z-10">
          {/* Animated Heading Letter-by-Letter */}
          <h1
            className={`text-center sm:text-left text-4xl sm:text-6xl md:text-7xl font-extrabold text-white drop-shadow-xl`}
          >
            <div className="inline-flex flex-wrap justify-center sm:justify-start">
              {headingText.split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: -40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, type: "spring" }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: headingText.length * 0.05 + 0.2,
                  type: "spring",
                }}
                className="inline-block text-5xl sm:text-6xl md:text-7xl bg-gradient-to-r from-[#915EFF] via-pink-500 to-purple-600 text-transparent bg-clip-text animate-pulse transform hover:scale-105 transition duration-500"
              >
                Gaurav
              </motion.span>
            </div>
          </h1>

          {/* Animated Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-6 text-white-100 max-w-3xl mx-auto sm:mx-0 text-center sm:text-left leading-relaxed text-base sm:text-lg"
          >
            <span className="inline-block transform transition duration-500 hover:scale-[1.02]">
              I'm a dedicated full-stack developer with hands-on experience in{" "}
              <span className="text-[#61dafb] font-semibold">Java</span>,{" "}
              <span className="text-[#61dafb] font-semibold">Spring Boot</span>,{" "}
              <span className="text-[#61dafb] font-semibold">ReactJS</span>,{" "}
              <span className="text-[#61dafb] font-semibold">React-Native</span>,{" "}
              <span className="text-[#61dafb] font-semibold">NextJS</span>,{" "}
              <span className="text-[#61dafb] font-semibold">Tailwind CSS</span>, and
              modern web tools. I enjoy building scalable, user-friendly
              applications and continuously learning new technologies to deliver
              high-quality solutions.
            </span>
          </motion.p>
        </div>
      </div>
      <ComputersCanvas />
      <div className="absolute xs:bottom-10 bottom-5  w-full flex justify-center items-center">
        <a href="#intro">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
