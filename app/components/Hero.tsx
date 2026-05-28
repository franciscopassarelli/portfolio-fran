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
  className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#0B1120] via-[#111827] to-[#1E293B]"
>
  {/* Programming-themed Background */}
  <div className="absolute inset-0 z-0">
    <CodePattern />
  </div>

  {/* Animated Gradient */}
  <div className="absolute inset-0 z-0 opacity-20">
    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-700 animate-gradient-x blur-3xl"></div>
  </div>

  <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
    <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
      <motion.div
        className="lg:w-1/2 text-center lg:text-left"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500">
          Francisco Passarelli
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-slate-200">
          Desarrollador Full Stack
        </h2>

        <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
          Creando experiencias digitales modernas y escalables con tecnologías web actuales.
          Especializado en aplicaciones full stack, interfaces dinámicas y soluciones enfocadas
          en rendimiento y experiencia de usuario.
        </p>

        <div className="flex justify-center lg:justify-start space-x-4 mb-8">
          <a
            href="https://github.com/franciscopassarelli?tab=repositories"
            className="p-3 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900 transition-all duration-300 shadow-lg hover:scale-105"
            aria-label="Perfil de GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon className="w-6 h-6 text-slate-300" />
          </a>

          <a
            href="https://www.linkedin.com/in/franciscopassarelli/"
            className="p-3 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900 transition-all duration-300 shadow-lg hover:scale-105"
            aria-label="Perfil de LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-6 h-6 text-slate-300" />
          </a>

          <a
            href="mailto:franciscopassarelli7@gmail.com"
            className="p-3 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900 transition-all duration-300 shadow-lg hover:scale-105"
            aria-label="Contacto por Email"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail className="w-6 h-6 text-slate-300" />
          </a>
        </div>

        <motion.button
          onClick={() =>
            document.getElementById("about")?.scrollIntoView({
              behavior: "smooth",
            })
          }
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-xl hover:shadow-cyan-500/20"
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
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl transform rotate-6 opacity-40 blur-sm"></div>

          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-3xl transform -rotate-6 opacity-40 blur-sm"></div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-800">
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
</section>
  )
}
