"use client"

import { motion } from "framer-motion"
import { Code, Database, Server, Zap } from "lucide-react"
import Image from "next/image"

export default function About() {
  const skills = [
    { icon: <Code className="w-8 h-8 text-green-500" />, title: "Frontend", description: "React.js, Next.js" },
    { icon: <Server className="w-8 h-8 text-blue-500" />, title: "Backend", description: "Node.js, Express.js, C#.NET" },
    {
      icon: <Database className="w-8 h-8 text-purple-500" />,
      title: "Bases de Datos",
      description: "MongoDB, Firebase, SQL.",
    },
    { icon: <Zap className="w-8 h-8 text-yellow-500" />, title: "Rendimiento", description: "Optimización, Caching" },
  ]

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-green-50 to-blue-100 dark:from-gray-900 dark:to-blue-900 transition-colors duration-300 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-4xl font-bold mb-8 text-center dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Sobre Mí
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Actualmente estudio Tecnicatura en Tecnologías Web en la Universidad Nacional del Oeste. Mi carrera en programación Full Stack comenzó en 2022 de manera autodidacta, complementando mi formación en la academia Coderhouse.
            </p>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            Mi enfoque está en el análisis de requerimientos y la implementación de buenas prácticas en el desarrollo de aplicaciones. He trabajado tanto en proyectos individuales como en equipo, desarrollando soluciones completas para el frontend y el backend.
            </p>
          </motion.div>
          <motion.div
            className="md:w-1/2 grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {skills.map((skill, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                {skill.icon}
                <h3 className="text-xl font-semibold mt-4 mb-2 dark:text-white">{skill.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{skill.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-64 h-64 -mb-32 -mr-32 opacity-20">
        <Image src="/placeholder.svg?height=256&width=256" alt="Fondo decorativo" width={256} height={256} />
      </div>
    </section>
  )
}

