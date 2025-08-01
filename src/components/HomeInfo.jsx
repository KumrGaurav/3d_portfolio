import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const gradientText = "bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent";
const cardStyle = "bg-white/10 backdrop-blur-md shadow-2xl rounded-2xl border border-white/20 p-6 transition-transform duration-300 transform hover:scale-105 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]";

const animatedButton = "relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white transition duration-300 ease-out border-2 border-white rounded-full shadow-md group";
const animatedSpan = "absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 group-hover:translate-x-0 ease";
const animatedText = "relative text-white transition duration-300 group-hover:text-white ease";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <div className={cardStyle}>
        <h1 className={`sm:text-2xl sm:leading-snug text-center font-bold ${gradientText}`}>
          Hi, I'm
          <span className='font-extrabold mx-2'>Gaurav</span> 👋
          <br />
          A Software Engineer
        </h1>
      </div>
    );

  if (currentStage === 2) {
    return (
      <div className={cardStyle}>
        <p className={`font-medium sm:text-xl text-center ${gradientText}`}>
          Worked with many companies <br /> and picked up many skills along the way
        </p>
        <Link to='/about' className={animatedButton}>
          <span className={animatedSpan}></span>
          <span className={animatedText}>
            Learn more <img src={arrow} alt='arrow' className='w-4 h-4 inline ml-2' />
          </span>
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className={cardStyle}>
        <p className={`font-medium sm:text-xl text-center ${gradientText}`}>
          Led multiple projects to success over the years. <br /> Curious about the impact?
        </p>
        <Link to='/projects' className={animatedButton}>
          <span className={animatedSpan}></span>
          <span className={animatedText}>
            Visit my portfolio <img src={arrow} alt='arrow' className='w-4 h-4 inline ml-2' />
          </span>
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className={cardStyle}>
        <p className={`font-medium sm:text-xl text-center ${gradientText}`}>
          Need a project done or looking for a dev? <br /> I'm just a few keystrokes away
        </p>
        <Link to='/contact' className={animatedButton}>
          <span className={animatedSpan}></span>
          <span className={animatedText}>
            Let's talk <img src={arrow} alt='arrow' className='w-4 h-4 inline ml-2' />
          </span>
        </Link>
      </div>
    );
  }

  return null;
};

export default HomeInfo;
