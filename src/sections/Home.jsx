import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";
import resume from "../assets/resume.pdf";

const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center
      bg-gradient-to-br from-indigo-700 via-purple-600 to-pink-500
      overflow-hidden"
    >
      {/* Animated Gradient Orbs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.25, 0.4, 0.25] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute -top-32 -left-32 w-[420px] h-[420px]
        bg-pink-400/40 rounded-full blur-3xl"
      />

      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute bottom-0 right-0 w-[420px] h-[420px]
        bg-indigo-400/40 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-6xl w-full px-6 grid md:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-white"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Hi, I’m{" "}
            <span className="bg-gradient-to-r from-yellow-300 to-pink-300
              bg-clip-text text-transparent animate-pulse">
              Angel 
            </span>{" "}
            <span className="inline-block animate-wave">👋</span>
          </h1>

          <p className="mt-6 text-xl md:text-2xl font-medium opacity-95">
            Frontend Developer <span className="opacity-60">|</span> MERN Stack Enthusiast
          </p>

          <p className="mt-5 text-lg opacity-85 max-w-md">
            I craft modern, responsive, and visually elegant web experiences
            with clean UI, smooth animations, and attention to detail.
          </p>

          {/* DOWNLOAD BUTTON */}
          <motion.a
            whileHover={{
              scale: 1.08,
              boxShadow: "0px 0px 30px rgba(255,255,255,0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            href={resume}
            download
            className="inline-block mt-10 px-10 py-4 rounded-xl
            bg-white/90 backdrop-blur text-indigo-700 font-semibold
            shadow-xl hover:bg-white transition-all"
          >
            Download Resume
          </motion.a>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <motion.div
            animate={{ y: [0, -18, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="relative"
          >
            <img
              src={profile}
              alt="Angel Profile"
              className="w-64 h-64 md:w-80 md:h-80 object-cover
              rounded-full border-4 border-white shadow-2xl"
            />

            <div className="absolute inset-0 rounded-full
              border-4 border-white/30 blur-md" />

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-12px] rounded-full
              border border-white/20"
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Home;