import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaDiscord } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xxxx", // change with your service ID from EmailJS
        "template_xxxx", // change with your template ID from EmailJS
        form.current, 
        "xxxx====", // change with your public key account from EmailJS
      )
      .then(
        (result) => {
          console.log("Success:", result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log("Failed:", error.text);
          alert("Failed to send message. Try again.");
        }
      );

    e.target.reset(); // Reset form setelah terkirim
  };


  return (
    <div
      className="scroll-mt-10 w-full mx-auto bg-black text-white sm:py-20 px-4"
      id="contact"
    >
      <div className="text-center">
        <h2
          className="text-4xl font-bold mb-2"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          Contact Me
        </h2>
        <motion.div
          className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4 sm:px-8 md:px-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          {/* Social Media Section */}
          <motion.div
            className="p-4 flex flex-col items-center md:items-start text-center md:text-left"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-4">You can find me on</h2>
            <div className="flex flex-col gap-4 justify-center md:justify-start text-xl sm:text-2xl md:text-3xl">
              {[
                {
                  icon: <FaLinkedin />,
                  link: "https://www.linkedin.com/in/your-linkedin-username",
                  label: "LinkedIn",
                  account: "your-linkedin-account",
                },
                {
                  icon: <FaInstagram />,
                  link: "https://instagram.com/your-instagram-username",
                  label: "Instagram",
                  account: "your-instagram-account",
                },
                {
                  icon: <FaGithub />,
                  link: "https://github.com/your-github-username",
                  label: "GitHub",
                  account: "your-github-account",
                },
                {
                  icon: <MdEmail />,
                  link: "mailto:your-email@gmail.com",
                  label: "Email",
                  account: "your-email@gmail.com",
                },
                {
                  icon: <FaDiscord />,
                  link: "https://discord.com/users/your-discord-id",
                  label: "Discord",
                  account: "your-discord-name",
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 py-2 bg-black rounded-lg transition transform hover:scale-105 hover:shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="text-white">{social.icon}</span>
                  <span className="text-white text-sm md:text-2xl">
                    {social.label}
                  </span>
                  <p className="text-gray-300 text-sm">{social.account}</p>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form Section */}
          <motion.div
            className="p-4 w-full"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="mb-4 text-2xl font-bold text-white text-center md:text-start max-w-md mx-auto">
              Keep in touch
            </h2>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-4 max-w-md mx-auto"
            >
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="w-full p-3 bg-black text-white rounded-md border border-gray-700 focus:ring-2 focus:ring-amber-50 outline-none"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="w-full p-3 bg-black text-white rounded-md border border-gray-700 focus:ring-2 focus:ring-amber-50 outline-none"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                required
                className="w-full p-3 bg-black text-white rounded-md border border-gray-700 focus:ring-2 focus:ring-amber-50 outline-none"
              ></textarea>
              <button
                type="submit"
                className="scale-95 hover:scale-105 cursor-pointer bg-yellow-400 hover:bg-yellow-500 transition text-black font-bold py-2 px-4 rounded-md"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
