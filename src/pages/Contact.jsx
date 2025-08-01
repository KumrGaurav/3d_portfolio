import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import toast from "react-hot-toast";
import { Fox } from "../models";
import { Loader } from "../components";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("idle");

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleFocus = () => setCurrentAnimation("walk");
  const handleBlur = () => setCurrentAnimation("idle");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      toast.error("All fields are required!");
      return;
    }

    setLoading(true);
    setCurrentAnimation("hit");

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Your Name",
          from_email: form.email,
          to_email: "your-email@example.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setLoading(false);
        toast.success("Message sent! I’ll get back to you soon.");
        setCurrentAnimation("idle");
        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
        setCurrentAnimation("idle");
        toast.error("Something went wrong. Please try again.");
      });
  };

  return (
    <section className="relative w-full pt-12 pl-12 mx-auto">
      <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden max-w-7xl mx-auto">
        {/* Contact Form */}
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        >
          <div className="mb-8">
            <p className="bg-gradient-to-r from-[#ffd700] to-[#ffc107] bg-clip-text text-transparent font-medium mb-2 text-lg">
              Get in touch
            </p>
            <h3 className="bg-gradient-to-r from-[#4567b7] to-[#6a7bff] bg-clip-text text-transparent font-black text-5xl">
              Contact.
            </h3>
          </div>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-6"
          >
            <label className="flex flex-col">
              <span className="text-[#4567b7] font-medium mb-2">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="bg-tertiary py-3 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium focus:ring-2 focus:ring-primary focus:border-transparent"
                onFocus={handleFocus}
                onBlur={handleBlur}
                required
              />
            </label>

            <label className="flex flex-col">
              <span className="text-[#4567b7] font-medium mb-2">
                Your Email
              </span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className="bg-tertiary py-3 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium focus:ring-2 focus:ring-primary focus:border-transparent"
                onFocus={handleFocus}
                onBlur={handleBlur}
                required
              />
            </label>

            <label className="flex flex-col">
              <span className="text-[#4567b7] font-medium mb-2">
                Your Message
              </span>
              <textarea
                rows={5}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What would you like to say?"
                className="bg-tertiary py-3 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                onFocus={handleFocus}
                onBlur={handleBlur}
                required
              />
            </label>

            <button
              type="submit"
              className="relative inline-block py-3 px-8 rounded-xl w-fit text-white font-bold transition-all duration-300 ease-in-out bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] hover:from-[#9333EA] hover:via-[#3B82F6] hover:to-[#6EE7B7] shadow-lg shadow-indigo-500/30 hover:shadow-purple-500/40 hover:scale-105 hover:ring-2 hover:ring-offset-2 hover:ring-indigo-400"
              onFocus={handleFocus}
              onBlur={handleBlur}
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </motion.div>

        {/* 3D Model */}
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          initial="hidden"
          animate="show"
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <Canvas
            shadows
            camera={{
              position: [0, 0, 5],
              fov: 75,
              near: 0.1,
              far: 1000,
            }}
          >
            <ambientLight intensity={0.5} />
            <directionalLight
              position={[10, 10, 5]}
              intensity={1}
              castShadow
              shadow-mapSize-width={1024}
              shadow-mapSize-height={1024}
            />
            <pointLight position={[10, 10, 10]} intensity={1} />

            <Suspense fallback={<Loader />}>
              <Fox
                currentAnimation={currentAnimation}
                position={[0, -0.5, 0]}
                rotation={[0, -0.3, 0]}
                scale={[0.8, 0.8, 0.8]}
              />
            </Suspense>
          </Canvas>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
