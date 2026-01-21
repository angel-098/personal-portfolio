import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A modern and responsive personal portfolio built using React and Tailwind CSS, focusing on clean UI, smooth animations, and user experience.",
  },
  {
    title: "Personal Finance Tracker",
    description:
      "A web application designed to track expenses, monitor spending habits, and provide simple financial insights with an intuitive interface.",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50
      dark:from-gray-900 dark:via-gray-900 dark:to-gray-800"
    >
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          My <span className="text-indigo-500">Projects</span>
        </motion.h2>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="rounded-3xl p-8 backdrop-blur-xl
              bg-white/70 dark:bg-gray-800/70
              shadow-xl border border-white/40 dark:border-gray-700"
            >
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                {project.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
