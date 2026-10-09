"use client"

import { Briefcase, Calendar, MapPin, Globe, Clock } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import AnimatedSectionHeader from "./AnimatedSectionHeader"

// ---------- Tipos ----------
type Position = {
  role: string
  start: string // "YYYY-MM"
  end: string | null // null = actualidad
  summary?: string
  responsibilities: string[]
}

type BaseExperience = {
  company: string
  location: string
  logo?: string
  skills?: string[]
}

type SingleExperience = BaseExperience & {
  period: string
  role: string
  employmentType?: string
  summary?: string
  responsibilities: string[]
}

type MultiExperience = BaseExperience & {
  employmentType?: string
  positions: Position[]
}

type ExperienceItem = SingleExperience | MultiExperience

// ---------- Helpers de fechas (estilo LinkedIn) ----------
const MONTHS = ["ene.", "feb.", "mar.", "abr.", "may.", "jun.", "jul.", "ago.", "sept.", "oct.", "nov.", "dic."]

// "2025-09" -> "sept. de 2025"
function formatMonth(yyyyMm: string): string {
  const [y, m] = yyyyMm.split("-").map(Number)
  return `${MONTHS[m - 1]} de ${y}`
}

// Cuenta meses de forma inclusiva, igual que LinkedIn ("2025-09" a hoy -> "1 año 2 meses")
function formatDuration(start: string, end?: string | null): string {
  const [sy, sm] = start.split("-").map(Number)
  const endDate = end ? new Date(`${end}-01T00:00:00`) : new Date()
  const total = (endDate.getFullYear() - sy) * 12 + (endDate.getMonth() + 1 - sm) + 1

  const years = Math.floor(total / 12)
  const months = total % 12
  const parts: string[] = []
  if (years) parts.push(`${years} ${years === 1 ? "año" : "años"}`)
  if (months) parts.push(`${months} ${months === 1 ? "mes" : "meses"}`)
  return parts.join(" ") || "1 mes"
}

function formatPeriod(start: string, end: string | null): string {
  const range = `${formatMonth(start)} - ${end ? formatMonth(end) : "actualidad"}`
  return `${range} · ${formatDuration(start, end)}`
}

// ---------- Subcomponentes ----------
function Summary({ text }: { text?: string }) {
  if (!text) return null
  return (
    <div className="mb-6 p-4 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 backdrop-blur-sm">
      <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{text}</p>
    </div>
  )
}

function Responsibilities({ items }: { items: string[] }) {
  return (
    <ul className="list-none space-y-2">
      {items.map((resp, idx) => (
        <li key={idx} className="text-gray-700 dark:text-gray-300 flex items-start">
          <span className="text-blue-500 mr-2">•</span>
          {resp}
        </li>
      ))}
    </ul>
  )
}

function Skills({ items }: { items?: string[] }) {
  if (!items || items.length === 0) return null
  return (
    <div className="mt-6 flex flex-wrap gap-2">
      {items.map((skill) => (
        <span
          key={skill}
          className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-200"
        >
          {skill}
        </span>
      ))}
    </div>
  )
}

function CompanyHeader({ exp }: { exp: ExperienceItem }) {
  return (
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
  )
}

// Empresa con varios puestos -> línea de tiempo
function MultiPositionContent({ exp }: { exp: MultiExperience }) {
  const starts = exp.positions.map((p) => p.start).sort()
  const companyStart = starts[0]
  const ends = exp.positions.map((p) => p.end)
  const companyEnd = ends.includes(null)
    ? null
    : (ends as string[]).sort()[ends.length - 1]

  return (
    <>
      <CompanyHeader exp={exp} />

      {exp.employmentType && (
        <p className="text-gray-600 dark:text-gray-300 mb-2 flex items-center">
          <Clock className="w-4 h-4 mr-2" />
          {exp.employmentType} · {formatDuration(companyStart, companyEnd)}
        </p>
      )}
      <p className="text-gray-600 dark:text-gray-300 mb-8 flex items-center">
        <MapPin className="w-4 h-4 mr-2" />
        {exp.location}
      </p>

      <ol className="relative">
        {exp.positions.map((pos, idx) => {
          const isLast = idx === exp.positions.length - 1
          return (
            <li key={idx} className="relative pl-8 pb-10 last:pb-0">
              {/* Línea vertical */}
              {!isLast && (
                <span
                  aria-hidden="true"
                  className="absolute left-[7px] top-5 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-800"
                />
              )}
              {/* Punto */}
              <span
                aria-hidden="true"
                className={`absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 border-blue-500 ${
                  pos.end ? "bg-white dark:bg-gray-800" : "bg-blue-500"
                }`}
              />

              <p className="text-xl font-medium mb-1 dark:text-gray-200 flex items-center">
                <Briefcase className="w-5 h-5 mr-2" />
                {pos.role}
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4 flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {formatPeriod(pos.start, pos.end)}
              </p>

              <Summary text={pos.summary} />
              <Responsibilities items={pos.responsibilities} />
            </li>
          )
        })}
      </ol>

      <Skills items={exp.skills} />
    </>
  )
}

// Empresa con un solo puesto -> layout original
function SinglePositionContent({ exp }: { exp: SingleExperience }) {
  return (
    <>
      <CompanyHeader exp={exp} />
      {exp.employmentType && (
        <p className="text-gray-600 dark:text-gray-300 mb-4 flex items-center">
          <Clock className="w-4 h-4 mr-2" />
          {exp.employmentType}
        </p>
      )}
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
      <Summary text={exp.summary} />
      <Responsibilities items={exp.responsibilities} />
      <Skills items={exp.skills} />
    </>
  )
}

// ---------- Componente principal ----------
export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      company: "SsySc Tech",
      location: "Provincia de Buenos Aires, Argentina · En remoto",
      employmentType: "Jornada completa",
      logo: "/ssysctech.jpg",
      positions: [
        {
          role: "Full Stack Developer",
          start: "2026-09",
          end: null,
          summary:
            "Desarrollador Full Stack en una empresa del sector correo y logística. Actualmente participo en un proyecto de transporte orientado a la gestión integral de facturación y control de operaciones. Formo parte del desarrollo de la aplicación desde cero, desde la implementación de funcionalidades hasta su integración con servicios backend.",
          responsibilities: [
            "Desarrollo de interfaces modernas y responsivas utilizando React, TypeScript y Material UI.",
            "Implementación de funcionalidades de negocio, formularios, tablas, filtros y operaciones ABM.",
            "Integración con APIs REST desarrolladas en Node.js, utilizando autenticación mediante Keycloak y JWT.",
            "Trabajo con SQL Server y aplicaciones desplegadas en OpenShift.",
            "Desarrollo de componentes reutilizables, validaciones y manejo de errores.",
            "Participación en revisiones de Merge Requests (MR), colaborando en la revisión de código y buenas prácticas.",
            "Trabajo colaborativo con Jira y Git/GitLab bajo metodologías ágiles.",
          ],
        },
        {
          role: "Full Stack Developer",
          start: "2025-09",
          end: null,
          summary:
            "Desarrollador Full Stack en una empresa del sector correo, logística y paquetería internacional. Participo en el desarrollo de aplicaciones web internas orientadas a la gestión operativa y al seguimiento de envíos y encomiendas internacionales.",
          responsibilities: [
            "Desarrollo de interfaces modernas y responsivas utilizando Next.js, Material UI y TypeScript.",
            "Diseño, implementación y mantenimiento de arquitecturas frontend basadas en FSD (Feature-Sliced Design) y Atomic Design.",
            "Desarrollo de funcionalidades de negocio, flujos de usuario y operaciones CRUD integradas con servicios backend.",
            "Implementación de validaciones, manejo de errores y mejoras en la experiencia de usuario.",
            "Integración y colaboración con APIs y servicios backend desarrollados en NestJS bajo principios de Clean Architecture y Domain-Driven Design (DDD).",
            "Desarrollo de pruebas unitarias y end-to-end utilizando Jest y Playwright para garantizar la calidad del software.",
            "Trabajo colaborativo bajo metodologías ágiles, utilizando Jira para la gestión de tareas y Git/GitLab para control de versiones.",
          ],
        },
      ],
      skills: ["TypeScript", "React", "Next.js", "Material UI", "Node.js", "NestJS", "SQL Server", "OpenShift", "GitLab", "Jira"],
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
        "Trabajo colaborativo utilizando Git para control de versiones y gestión del código.",
      ],
      skills: ["JavaScript", "React.js", "React Native", "Node.js", "Express", "MongoDB", "Git"],
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
      skills: ["JavaScript", "Python", "SQL", "React.js", "Node.js", "Git"],
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
        "El backend fue desarrollado en Java y MySQL.",
        "Aporté funciones clave como tarifas exclusivas, reservas flexibles, atención personalizada y herramientas de gestión para administradores.",
      ],
      skills: ["Java", "Spring Boot", "MySQL", "React.js", "Tailwind CSS", "Git", "Docker"],
    },

    {
      company: "Contactomaq",
      location: "José Manuel Estrada 1723, B1742 Paso del Rey, Provincia de Buenos Aires · Presencial",
      employmentType: "Jornada parcial",
      period: "nov. de 2023 - ene. de 2025 · 1 año 3 meses",
      role: "Soporte Técnico y Operaciones de E-commerce",
      summary: "Soporte técnico y operaciones de e-commerce.",
      responsibilities: [
        "Soporte técnico de equipos informáticos, incluyendo diagnóstico y resolución de problemas.",
        "Gestión de productos, control de stock y preparación y despacho de pedidos en Mercado Libre.",
        "Gestión de operaciones de e-commerce y atención al cliente.",
        "Seguimiento de devoluciones y reclamos, buscando brindar una respuesta ágil a los clientes.",
        "Colaboración en la publicación y visibilidad de productos para favorecer las ventas.",
      ],
      skills: ["Soporte Técnico", "Gestión de E-commerce", "Atención al Cliente"],
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
              key={exp.company}
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
                {"positions" in exp ? (
                  <MultiPositionContent exp={exp} />
                ) : (
                  <SinglePositionContent exp={exp} />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}