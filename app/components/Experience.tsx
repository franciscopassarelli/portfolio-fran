"use client"

import { Briefcase, Calendar, MapPin, Globe } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import AnimatedSectionHeader from "./AnimatedSectionHeader"

export default function Experience() {
  const experiences = [

    {
      company: "En red consultora",
      location: "Remoto",
      period: "dic-2024 - Actualidad",
      role: "Desarrollador Frontend",
      logo: "/enred.jpg",
      responsibilities: [
        "Colaboro como desarrollador frontend freelance en Enred Consultora, una agencia especializada en comunicación digital y desarrollo web. Me encargo de:",
        "Desarrollar sitios web desde cero según requerimientos del cliente.",
        "Diseñar interfaces modernas y responsivas usando React, Next.js, Firebase, Tailwind CSS (u otras herramientas según proyecto).",
        "Refactorizar y mantener sitios existentes para mejorar su rendimiento y experiencia de usuario.",
        "Implementar funcionalidades específicas y optimizar flujos de interacción.",
        "Aportar soluciones técnicas a medida para marcas, PyMEs y emprendedores."
      ],
      
    },

    {
      company: "No Country",
      location: "Remoto",
      period: "nov-2024 - feb-2025",
      role: "Frontend Web Developer",
      logo: "/nocountry.jpg",
      responsibilities: [
        "Desarrollé una experiencia intuitiva con React.js y Tailwind CSS, colaborando con backend y testers para asegurar una plataforma robusta.",
        "Integré APIs, utilicé Git para control de versiones y Docker para entornos de desarrollo.",
        "El backend fue desarrollado en Java y MySQL (a cargo del equipo backend).",
        "Aporté funciones clave como tarifas exclusivas, reservas flexibles, atención personalizada y herramientas de gestión para administradores."
      ],
      
    },

    {
      company: "Fullstack Developer Independiente",
      location: "Remoto",
      period: "Abr-2022 - Mar-2025",
      role: "Fullstack Developer",
      responsibilities: [
        "Desarrollo de soluciones para clientes y simulaciones laborales:",
        "Software de gestión de stock para comercio.",
        "Sistema de turnos para club deportivo.",
        "Tienda online para empresa agrícola.",
        "Web app para agencia de viajes (proyecto grupal simulado).",
        "Plataforma para emprendedores y PyMEs.",
        "E-commerce autoadministrable. (Frontend y Backend).",
      ],
    },

    {
      company: "Contactomaq",
      location: "Presencial",
      period: "nov-2023 - ene 2025",
      role: "Responsable de E-commerce y Ventas Online",
      responsibilities: [
        "Gestión de productos y despacho de pedidos en la plataforma de Mercado Libre.",
        "Creación de una página web. (Desarrollo de una Tienda Online para visualización de productos, conectando usuarios con la plataforma de Mercado Libre).",
        "Especialista en Operaciones Ecommerce, atención al cliente y supervisión de stock.",
        "Coordiné la gestión de devoluciones y reclamos, asegurando un proceso ágil y satisfactorio para los clientes.",
        "Mi gestión contribuyó a una mayor visibilidad de los productos, logrando aumentar las ventas en la plataforma.",
      ],
    },
  ]

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 transition-colors duration-300 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSectionHeader title="Experiencia Profesional" />
        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl relative overflow-hidden group"
            >
              <div
                className="absolute top-0 right-0 w-32 h-32 bg-blue-200 dark:bg-blue-700 rounded-bl-full z-0 opacity-50 
                transition-transform duration-300 group-hover:scale-110"
              ></div>

              
              <div className="relative z-10">
              
                <h3 className="text-2xl font-semibold mb-2 dark:text-white flex items-center">
                    {exp.logo && (
      <div className="mr-4">
      <Image
        src={exp.logo}
        alt={`${exp.company} logo`}
        width={60}
        height={60}
        className="rounded-md object-contain"
      />
      </div>
  )}
                  {exp.company === "Freelance" ? <Globe className="w-6 h-6 mr-2 text-blue-500" /> : null}
                  {exp.company}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  {exp.location}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {exp.period}
                </p>
                <p className="text-xl font-medium mb-4 dark:text-gray-200 flex items-center">
                  <Briefcase className="w-5 h-5 mr-2" />
                  {exp.role}
                </p>
                <ul className="list-none space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-gray-700 dark:text-gray-300 flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-64 h-64 -mb-32 -mr-32 opacity-20">
        <Image src="/placeholder.svg?height=256&width=256" alt="Decorative background" width={256} height={256} />
      </div>
    </section>
  )
}

