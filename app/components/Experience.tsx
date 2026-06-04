"use client"

import { Briefcase, Calendar, MapPin, Globe } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import AnimatedSectionHeader from "./AnimatedSectionHeader"

export default function Experience() {
  const experiences = [
{
  company: "SsySc Tech",
  location: "Remoto",
  period: "sep-2025 - Actualidad",
  role: "Full Stack Developer",
  logo: "/ssysctech.jpg",
  summary:
  "Participación en proyectos Full Stack para aplicaciones web internas orientadas a la gestión operativa y seguimiento de paquetes internacionales en una empresa del rubro correo/logística.",

  responsibilities: [
  "Desarrollo de interfaces utilizando Next.js, Material UI y TypeScript.",
  "Definición y mantenimiento de arquitectura frontend con FSD y Atomic Design.",
  "Implementación de flujos de usuario y operaciones CRUD.",
  "Validación de datos y manejo de errores en frontend.",
  "Integración y colaboración con servicios backend desarrollados en NestJS bajo arquitecturas basadas en Clean Architecture y DDD.",
  "Testing unitario y end-to-end utilizando Jest y Playwright.",
  "Trabajo con metodologías ágiles mediante Jira y control de versiones con Git y GitLab."
],
},


   {
  company: "En red consultora",
  location: "Remoto",
  period: "oct-2024 - nov-2025",
  role: "Frontend Developer",
  logo: "/enred.jpg",

  summary:
    "Desarrollador Frontend en una consultora orientada a desarrollo web y comunicación digital, participando en proyectos personalizados para distintos clientes.",

  responsibilities: [
    "Desarrollo de aplicaciones utilizando React.js y React Native.",

    "Implementación de funcionalidades frontend y colaboración en integraciones backend con Node.js y Express.",

    "Integración y manejo de bases de datos MongoDB en distintas funcionalidades del sistema.",

    "Desarrollo de interfaces modernas, responsivas y orientadas a experiencia de usuario.",

    "Despliegue y mantenimiento de aplicaciones en plataformas como Vercel y Render.",

    "Trabajo colaborativo utilizando Git para control de versiones y gestión del código."
  ],
},


    {
      company: "Freelance",
      location: "Remoto",
      period: "Abr-2022 - Mar-2025",
      role: "Software Developer",
      responsibilities: [
        "Desarrollo de soluciones para clientes",
        "Sistema de gestión de stock y ventas para negocios. (Control de inventario, productos, ventas y reportes en tiempo real)",
        "Plataforma e-commerce para una empresa agrícola. (Visualización de productos y derivando las compras a Mercado Libre)",
        "Desarrollo de una aplicación móvil para gestión de turnos y recordatorios. (utilizando React Native, con funcionalidades de notificaciones push y sincronización en la nube)",
      ],
    },

    {
      company: "No Country",
      location: "Remoto",
      period: "sep-2024 - nov-2024",
      role: "Desarrollador Frontend",
      logo: "/nocountry.jpg",
      responsibilities: [
        "Desarrollé una experiencia intuitiva con React.js y Tailwind CSS, colaborando con backend y testers para asegurar una plataforma robusta.",
        "Integré APIs, utilicé Git para control de versiones y Docker para entornos de desarrollo.",
        "El backend fue desarrollado en Java y MySQL (a cargo del equipo backend).",
        "Aporté funciones clave como tarifas exclusivas, reservas flexibles, atención personalizada y herramientas de gestión para administradores."
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
                {exp.summary && (
  <div
    className="
      mb-6
      p-4
      rounded-2xl
      border
      border-cyan-500/20
      bg-cyan-500/10
      backdrop-blur-sm
    "
  >
    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
      {exp.summary}
    </p>
  </div>
)}

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
      
    </section>
  )
}

