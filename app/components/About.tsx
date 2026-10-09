"use client"

import type { ElementType } from "react"
import { motion } from "framer-motion"
import { Briefcase, CalendarDays, GraduationCap, MapPin } from "lucide-react"

type Fact = {
  icon: ElementType
  label: string
  value: string
}

const FACTS: Fact[] = [
  { icon: Briefcase, label: "Actualmente", value: "Full Stack Developer en SsySc Tech" },
  { icon: GraduationCap, label: "Formación", value: "Tecnicatura en Tecnologías Web — UNO" },
  { icon: CalendarDays, label: "Programando desde", value: "2022" },
  { icon: MapPin, label: "Ubicación", value: "Buenos Aires, Argentina" },
]

export default function About() {
  return (
    <section
      id="about"
      className="py-16 bg-gradient-to-br from-green-50 to-blue-100 dark:from-gray-900 dark:to-blue-900 transition-colors duration-300 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        <motion.h2
          className="text-4xl font-bold mb-10 text-center dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Sobre Mí
        </motion.h2>

        <div className="grid md:grid-cols-5 gap-8 items-center">
          {/* Bio */}
          <motion.div
            className="md:col-span-3 space-y-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p>
              Soy desarrollador{" "}
              <strong className="font-semibold text-gray-900 dark:text-white">Full Stack JavaScript</strong>{" "}
              y estudiante de la Tecnicatura en Tecnologías Web en la Universidad Nacional del Oeste.
              Empecé a programar en 2022 de forma autodidacta y me formé en Coderhouse.
            </p>
            <p>
              Hoy trabajo en{" "}
              <strong className="font-semibold text-gray-900 dark:text-white">SsySc Tech</strong>{" "}
              desarrollando aplicaciones web internas: interfaces, funcionalidades de negocio,
              integración con APIs y bases de datos.
            </p>
            <p>
              Me importa escribir código claro y mantenible, entender la lógica del negocio detrás de
              cada funcionalidad. Valoro el trabajo en equipo, las revisiones de código y el aprendizaje continuo.
            </p>
          </motion.div>

          {/* Datos rápidos */}
          <motion.ul
            className="md:col-span-2 space-y-4 rounded-2xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-white/60 dark:border-gray-700 shadow-lg p-5"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {FACTS.map(({ icon: Icon, label, value }) => (
              <li key={label} className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-500/10">
                  <Icon className="h-4 w-4 text-blue-500" />
                </span>
                <div className="leading-tight">
                  <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">{label}</p>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{value}</p>
                </div>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  )
}