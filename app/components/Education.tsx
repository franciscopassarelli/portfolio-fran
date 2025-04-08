"use client"

import { GraduationCap, Calendar, Award } from "lucide-react"
import Image from "next/image"
import AnimatedSectionHeader from "./AnimatedSectionHeader"
import { motion } from "framer-motion"

export default function Education() {
  const education = [
    {
      degree: "Tecnicatura en Tecnologías Web",
      institution: "Universidad Nacional del Oeste",
      period: "Feb-2025 – Actualidad",
      achievements: [
        "Los alcances del título le permitirán al egresado colaborar en tareas de supervisión, mantenimiento, planificación, desarrollo o servicios especializados en sistemas de diseño gráfico y aplicaciones web.",
      ],
    },
    {
      degree: "Carrera desarrollo Front-End React.js",
      institution: "Coderhouse",
      period: "Agosto 2022 – Enero 2023",
      achievements: [
        "Diseño y desarrollo de interfaces responsivas con HTML, CSS y JavaScript.",
        "Construcción de aplicaciones SPA utilizando React.js y manejo de estado con hooks.",
        "Integración con APIs REST para consumo de datos dinámicos.",
        "Uso de herramientas de control de versiones como Git y GitHub.",
      ],
    },
    {
      degree: "Carrera desarrollo Back-End",
      institution: "Coderhouse",
      period: "Marzo 2024 – Agosto 2024",
      achievements: [
        "Desarrollo de APIs RESTful utilizando Node.js y Express.",
        "Gestión de bases de datos relacionales (SQL) y no relacionales (MongoDB).",
        "Implementación de operaciones CRUD y validaciones de datos.",
        "Manejo de autenticación y autorización con tokens JWT.",
        "Introducción a la programación con C# y fundamentos de .NET.",
      ]
    }
  ]

  return (
    <section
      id="education"
      className="py-20 bg-gradient-to-br from-indigo-50 to-purple-100 dark:from-gray-900 dark:to-purple-900 transition-colors duration-300 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSectionHeader title="Educación" />
        <div className="max-w-3xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl relative overflow-hidden mb-10 border border-gray-200 dark:border-gray-700"
            >
              <div className="absolute top-0 left-0 w-32 h-32 bg-purple-200 dark:bg-purple-700 rounded-br-full z-0 opacity-50"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-2 dark:text-white flex items-center">
                  <GraduationCap className="w-6 h-6 mr-2" />
                  {edu.degree}
                </h3>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">{edu.institution}</p>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {edu.period}
                </p>
                <h4 className="text-lg font-medium mb-2 dark:text-gray-200 flex items-center">
                  <Award className="w-5 h-5 mr-2" />
                  Logros Clave:
                </h4>
                <ul className="list-disc list-inside space-y-2">
                  {edu.achievements.map((achievement, idx) => (
                    <li key={idx} className="text-gray-700 dark:text-gray-300">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute top-0 left-0 w-64 h-64 -mt-32 -ml-32 opacity-20">
        <Image src="/placeholder.svg?height=256&width=256" alt="Decorative background" width={256} height={256} />
      </div>
    </section>
  )
}
