"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Github, Linkedin, Mail, ArrowDown, Code2 } from "lucide-react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"

// ---------- Config del badge ----------
const STATUS_TEXT = "Trabajando en SsySc Tech"
const STACKS = ["React · Next.js", "Node · NestJS", "TypeScript · SQL", "Jest · Playwright"]
const ROTATE_EVERY_MS = 2500

function StatusBadge() {
  const reduceMotion = useReducedMotion()
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % STACKS.length), ROTATE_EVERY_MS)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="flex flex-col items-center gap-1.5 px-5 py-3 rounded-2xl bg-slate-900/90 border border-slate-700/80 backdrop-blur-sm shadow-xl">
      {/* Estado con puntito que late */}
      <div className="flex items-center gap-2">
        <span className="relative flex h-2.5 w-2.5">
          {!reduceMotion && (
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
          )}
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
        </span>
        <span className="text-sm font-medium text-slate-200 whitespace-nowrap">{STATUS_TEXT}</span>
      </div>

      {/* Stack que rota */}
      <div className="flex items-center gap-2 h-5 overflow-hidden">
        <Code2 className="w-4 h-4 text-cyan-400 shrink-0" />
        <div className="relative min-w-[8.5rem] h-5">
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={STACKS[index]}
              className="absolute inset-0 text-sm text-slate-400 whitespace-nowrap"
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
            >
              {STACKS[index]}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

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
  const reduceMotion = useReducedMotion()

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
                <Github className="w-6 h-6 text-slate-300" />
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
              {/* Resplandor suave detrás */}
              <div
                aria-hidden="true"
                className="absolute -inset-8 rounded-full bg-gradient-to-tr from-cyan-500/30 via-blue-600/20 to-indigo-500/30 blur-3xl"
              />

              {/* Anillo con gradiente que gira */}
              <motion.div
                aria-hidden="true"
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "conic-gradient(from 0deg, #22d3ee, #3b82f6, #6366f1, transparent 65%, #22d3ee)",
                }}
                animate={reduceMotion ? undefined : { rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />

              {/* Separación entre anillo y foto */}
              <div aria-hidden="true" className="absolute inset-[3px] rounded-full bg-[#0B1120]" />

              {/* Foto */}
              <div className="absolute inset-3 rounded-full overflow-hidden ring-1 ring-slate-700/60 shadow-2xl">
                <Image
                  src="/fran.jpg"
                  alt="Francisco Passarelli"
                  fill
                  sizes="(min-width: 768px) 384px, 288px"
                  className="object-cover object-center"
                  priority
                />
              </div>

              {/* Badge de estado, centrado debajo de la foto */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 z-10">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <StatusBadge />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}