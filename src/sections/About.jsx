import { motion } from "framer-motion";
import { FaBolt, FaPalette, FaLightbulb } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-24 overflow-hidden
      bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50
      dark:from-gray-900 dark:via-gray-900 dark:to-gray-800"
    >
      {/* Soft Background Glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-400/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">

        {/* Background Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="
            backdrop-blur-xl
            bg-white/80 dark:bg-gray-800/80
            rounded-3xl
            shadow-2xl
            p-10
            text-center
          "
        >
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-6"
          >
            About <span className="text-indigo-500">Me</span>
          </motion.h2>

          {/* One Paragraph */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
          >
            I am a passionate Frontend Developer and aspiring MERN Stack Developer
            with strong skills in Java, HTML, CSS, JavaScript, SQL, and React.
            I enjoy building modern, responsive web interfaces with clean design,
            smooth animations, and a strong focus on user experience. I am a fast
            learner who loves turning ideas into elegant, functional digital
            experiences.
          </motion.p>

          {/* Inline Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-10 mt-10
            text-gray-700 dark:text-gray-300"
          >
            <div className="flex items-center gap-2">
              <FaBolt className="text-indigo-500" />
              <span className="font-medium">Fast Learner</span>
            </div>

            <div className="flex items-center gap-2">
              <FaPalette className="text-pink-500" />
              <span className="font-medium">UI Focused</span>
            </div>

            <div className="flex items-center gap-2">
              <FaLightbulb className="text-yellow-500" />
              <span className="font-medium">Problem Solver</span>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;
