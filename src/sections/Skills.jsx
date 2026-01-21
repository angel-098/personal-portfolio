import { motion } from "framer-motion";
import {
  FaJava,
  FaHtml5,
  FaJs,
  FaReact,
  FaDatabase,
} from "react-icons/fa";

const skills = [
  { name: "HTML / CSS", icon: <FaHtml5 />, color: "text-orange-500" },
  { name: "Java", icon: <FaJava />, color: "text-red-500" },
  { name: "SQL", icon: <FaDatabase />, color: "text-purple-500" },
  { name: "JavaScript", icon: <FaJs />, color: "text-yellow-400" },
  { name: "React", icon: <FaReact />, color: "text-cyan-400" },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50"
    >
      <div className="max-w-4xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-14"
        >
          <span className="text-indigo-600">Skills</span>
        </motion.h2>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-indigo-300 ml-5 space-y-10">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.12 }}
              viewport={{ once: true }}
              className="relative pl-8"
            >
              {/* Dot */}
              <span
                className="absolute -left-[9px] top-1 w-4 h-4
                rounded-full bg-indigo-500"
              />

              {/* Card */}
              <div
                className="bg-white rounded-xl p-4 shadow-md
                flex items-center gap-3"
              >
                <div className={`text-2xl ${skill.color}`}>
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {skill.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
