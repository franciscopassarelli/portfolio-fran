"use client"

import { Briefcase, Calendar, MapPin, Globe } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import AnimatedSectionHeader from "./AnimatedSectionHeader"

export default function Experience() {
  const experiences = [
    {
      company: "No Country",
      location: "Remoto",
      period: "nov-2024 - feb-2025",
      role: "Frontend Web Developer",
      responsibilities: [
        "Como responsable del frontend y el diseño de la interfaz de la agencia de viajes, me encargué de crear una experiencia de usuario intuitiva utilizando React.js y Tailwind CSS.",
        "Colaboré estrechamente con los desarrolladores backend y los testers para garantizar la robustez y funcionalidad de la plataforma.",
        "Participé en la integración y consumo de APIs, y utilicé Git para el control de versiones y una colaboración eficiente en el equipo.",
        "Para el backend, se utilizaron Java y MySQL para garantizar la eficiencia en el manejo de datos y operaciones (trabajo realizado en colaboración con el equipo backend).",
        "Contribuí con tareas innovadoras, como la implementación de tarifas exclusivas, reservas flexibles y atención personalizada para los usuarios, además de herramientas de gestión para los administradores."
      ],
      
    },

    {
      company: "Contactomaq",
      location: "Presencial",
      period: "nov-2023 - ene 2025",
      role: "Responsable de Plataforma de Mercado Libre",
      responsibilities: [
        "Gestión de productos y despacho de pedidos en la plataforma de Mercado Libre.",
        "Creación de una página web. (Desarrollo de una Tienda Online para visualización de productos, conectando usuarios con la plataforma de Mercado Libre).",
        "Especialista en Operaciones Ecommerce, atención al cliente y supervisión de stock.",
        "Coordiné la gestión de devoluciones y reclamos, asegurando un proceso ágil y satisfactorio para los clientes.",
        "Mi gestión contribuyó a una mayor visibilidad de los productos, logrando aumentar las ventas en la plataforma.",
      ],
    },

    {
      company: "Fullstack Developer Independiente",
      location: "Remoto",
      period: "Abr-2022 - Dic-2024",
      role: "Fullstack Developer",
      responsibilities: [
        "Como desarrollador, he trabajado en varios proyectos funcionales de manera independiente y en equipo.",
        "Agencia de Viajes: Exploramás. Desarrollé una plataforma de reservas de viajes, permitiendo a los usuarios explorar destinos y realizar reservas de manera fácil y rápida, con un diseño interactivo y accesible.",
        "Software de Turnos: El Campito Tenis Club. Creé un sistema de gestión de turnos para un club de tenis, optimizando la reserva de canchas y la administración de horarios, mejorando la experiencia tanto para los usuarios como para los administradores del club.",
        "Desarrollo Tienda Online: Contactomaq. Desarrollé una tienda en línea funcional, permitiendo a los usuarios explorar productos, realizar compras y gestionar sus pedidos, con integración de pagos en línea para una experiencia de compra completa.",
        "Perfil de Autenticación: AuthProfile. Un sistema seguro de inicio de sesión y registro que permite a los usuarios crear y gestionar su perfil profesional de manera exclusiva, garantizando acceso a herramientas personalizadas para la creación y exportación de CV.",
        "Administrador de Proyectos: Desarrollé una herramienta de gestión de proyectos que facilita el seguimiento de tareas, la colaboración entre equipos y la planificación de proyectos, ayudando a mejorar la productividad de los usuarios.",
        "E-commerce Autoadministrable: Implementé una tienda de comercio electrónico autoadministrable, donde los administradores pueden gestionar productos, actualizar inventarios y procesar pedidos sin necesidad de intervención externa.",
        "Web API: Movie App. Creé una aplicación web que consume una API para mostrar información sobre películas y series, proporcionando a los usuarios una interfaz sencilla para buscar, filtrar y explorar contenidos multimedia.",
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

