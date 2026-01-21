import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

const contacts = [
  {
    icon: <Mail size={28} />,
    label: "Email",
    value: "angelsriram1723@gmail.com",
    link: "mailto:yourmail@gmail.com",
  },
  {
    icon: <Github size={28} />,
    label: "GitHub",
    value: "github.com/yourprofile",
    link: "https://github.com/yourprofile",
  },
  {
    icon: <Linkedin size={28} />,
    label: "LinkedIn",
    value: "linkedin.com/in/yourprofile",
    link: "https://linkedin.com/in/yourprofile",
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-28 bg-gradient-to-br from-indigo-700 via-purple-600 to-pink-500"
    >
      <div className="max-w-5xl mx-auto px-6 text-center text-white">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-6"
        >
          Let’s <span className="text-yellow-300">Connect</span>
        </motion.h2>

        <p className="opacity-90 max-w-xl mx-auto mb-14">
          Feel free to reach out for collaborations, opportunities, or just a
          friendly conversation.
        </p>

        {/* Contact Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-center gap-8"
        >
          {contacts.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.08 }}
              className="
                flex items-center gap-4
                bg-white/15 backdrop-blur-xl
                px-8 py-5 rounded-2xl
                shadow-xl hover:bg-white/25
                transition-all duration-300
              "
            >
              <div className="text-yellow-300">{item.icon}</div>
              <div className="text-left">
                <p className="font-semibold">{item.label}</p>
                <p className="text-sm opacity-90">{item.value}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
