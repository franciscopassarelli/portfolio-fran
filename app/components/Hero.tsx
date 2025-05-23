"use client"

import Image from "next/image"
import { GitlabIcon as GitHubIcon, Linkedin, Mail, ArrowDown } from "lucide-react"
import { motion } from "framer-motion"

const CodePattern = () => (
  <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
    <pattern
      id="pattern-circles"
      x="0"
      y="0"
      width="50"
      height="50"
      patternUnits="userSpaceOnUse"
      patternContentUnits="userSpaceOnUse"
    >
      <circle id="pattern-circle" cx="10" cy="10" r="1.6257413380501518" fill="#000"></circle>
    </pattern>
    <rect id="rect" x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
  </svg>
)

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-green-50 via-teal-50 to-blue-50 dark:from-gray-900 dark:via-teal-900 dark:to-blue-900"
    >
      {/* Programming-themed Background */}
      <div className="absolute inset-0 z-0">
        <CodePattern />
      </div>

      {/* Animated Gradient */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-1000 via-teal-500 to-blue-600 animate-gradient-x"></div>
      </div>

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            className="lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-400 dark:to-blue-400">
              Francisco Passarelli
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-700 dark:text-gray-300">
              Desarrollador Full Stack
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0">
              Creando experiencias digitales excepcionales con tecnologías web modernas y una base sólida en diversas herramientas. Especializado en el desarrollo de aplicaciones full stack escalables y eficientes.
            </p>
            <div className="flex justify-center lg:justify-start space-x-4 mb-8">
              <a
                href="https://github.com/franciscopassarelli?tab=repositories"
                className="p-3 rounded-full bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800 transition-colors duration-300 shadow-lg hover:shadow-xl"
                aria-label="Perfil de GitHub"
                target="_blank"  // Abre en nueva pestaña
                rel="noopener noreferrer"  // Mejora la seguridad
              >
                <GitHubIcon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/franciscopassarelli/"
                className="p-3 rounded-full bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800 transition-colors duration-300 shadow-lg hover:shadow-xl"
                aria-label="Perfil de LinkedIn"
                target="_blank"  // Abre en nueva pestaña
                rel="noopener noreferrer"  // Mejora la seguridad
              >
                <Linkedin className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </a>
              <a
                href="mailto:franciscopassarelli7@gmail.com"
                className="p-3 rounded-full bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800 transition-colors duration-300 shadow-lg hover:shadow-xl"
                aria-label="Contacto por Email"
                target="_blank"  // Abre en nueva pestaña
                rel="noopener noreferrer"  // Mejora la seguridad
              >
                <Mail className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </a>
            </div>
            <motion.button
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-full hover:from-green-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Conoce más
              <ArrowDown className="w-4 h-4" />
            </motion.button>
          </motion.div>

          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-400 dark:from-green-600 dark:to-blue-600 rounded-3xl transform rotate-6 opacity-50"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-green-400 dark:from-blue-600 dark:to-green-600 rounded-3xl transform -rotate-6 opacity-50"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/fran.jpg"
                  alt="Francisco Passarelli"
                  width={400}
                  height={400}
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
       
      </motion.div>
    </section>
  )
}
