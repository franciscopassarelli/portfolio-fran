"use client"

import { motion } from "framer-motion"
import { Code, Layout, Server, Smartphone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Services() {
  const services = [
    {
      icon: <Layout className="w-6 h-6 text-blue-500" />,
      title: "Exploramás",
      description: "Como parte de un equipo, fui responsable del frontend y del diseño de la interfaz. Durante mis prácticas profesionales en NoCountry, participé en el desarrollo de la agencia de viajes Exploramás, con características innovadoras como tarifas exclusivas, reservas flexibles y atención personalizada para los usuarios, además de herramientas de gestión para los administradores.",
      image: "exploramas.png",
      link: "https://exploramas.vercel.app/"
    },
    {
      icon: <Server className="w-6 h-6 text-yellow-300" />,
      title: "AuthProfile",
      description: "Esta aplicación web ha sido desarrollada utilizando React, TypeScript y Material UI, con el objetivo de facilitar la creación y exportación de currículums de manera rápida y sencilla. Permite a los usuarios registrarse, iniciar sesión y crear un perfil personal donde pueden agregar información relevante, como su experiencia, educación, habilidades y una foto de perfil.",
      image: "gestorcv.png",
      link: "https://authprofile.vercel.app/"
    },
    {
      icon: <Code className="w-6 h-6 text-purple-500" />, 
      title: "API Web Contactomaq",
      description:
        "Este proyecto es una página de comercio electrónico conectada con Mercado Libre, diseñada para la venta de repuestos de jardinería. Utilicé Next.js para la estructura y Tailwind CSS para el diseño. La integración con Mercado Libre facilita la gestión y actualización de productos.",
      image: "ecommerce.png",
      link: "https://contactomaq.vercel.app/"
    },
    {
      icon:  <Code className="w-6 h-6 text-purple-200" />, 
      title: "Web E-commerce",
      description: "Este proyecto es una tienda en línea especializada en la venta de tenis. Utiliza Tailwind CSS para el diseño visual, Next.js para la estructura de la aplicación, Firebase para la autenticación de usuarios y la gestión de datos. Además, cuenta con una sección de administración para gestionar productos, con alertas para notificaciones en tiempo real.",
      image: "frantenis.png",
      link: "https://next-aplication-five.vercel.app/"
    },
    {
      icon: <Server className="w-6 h-6 text-green-500" />,
      title: "CostoFinal",
      description: "Consulta Impuestos: Calculadora de Costos para Emprendedores y PYMES. Nuestra plataforma, desarrollada con React, TypeScript, Tailwind CSS y ShadCN, permite conocer el costo real de un producto, sumando impuestos, costos de envío, comisiones y otros gastos ocultos. Ideal para emprendedores, PYMES y vendedores independientes que buscan precios competitivos y sin sorpresas.",
      image: "coste.png",
      link: "https://costo-final.vercel.app/"
    },
    {
      icon: <Code className="w-6 h-6 text-yellow-400" />, 
      title: "Web API Movie",
      description: "Aplicación web que permite a los usuarios buscar películas por nombre y visualizar detalles utilizando la API Cinema. La interfaz incluye un formulario de contacto y una sección de ayuda interactiva para asistir a los usuarios. Además, se implementa una solicitud de feedback después de un minuto de inactividad.",
      image: "movie.png",
      link: "https://movie-app-beige-chi.vercel.app/"
    },
    {
      icon: <Server className="w-6 h-6 text-orange-400" />,
      title: "Software Gestion",
      description:
        "Desarrollé un software para gestionar y administrar los horarios y días de las canchas de tenis. Además incluye un sección para crear torneo, crear jugadores en un ranking y que persistan guardados. Todo esto para que puedan usarlo los dias que quieran. (React JS).",
      image: "campito.png",
      link: "https://software-el-campito-tenis-club.vercel.app/"
    },
    {
      icon: <Layout className="w-6 h-6 text-blue-400" />,
      title: "BurgerBeer",
      description: "He desarrollado una plataforma web interactiva para un negocio de ventas en línea, que incluye un carrito de compras integrado para facilitar el proceso de compra. Utilicé JavaScript para la funcionalidad dinámica del sitio, SweetAlert para mostrar alertas personalizadas de manera visualmente atractiva y CSS para crear un diseño intuitivo y moderno.",
      image: "burger.png",
      link: "https://franciscopassarelli.github.io/Burguer-B/"
    },
  ]

  return (
    <section
      id="services"
      className="py-16 bg-gradient-to-br from-indigo-50 to-blue-100 dark:from-gray-900 dark:to-blue-900 transition-colors duration-300 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-3xl font-bold mb-10 text-center dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Proyectos
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Link key={index} href={service.link} target="_blank">
              <motion.div
                className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 h-full"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  {service.icon}
                  <h3 className="text-sm font-semibold ml-4 dark:text-white">{service.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-xs mb-4">{service.description}</p>
                <div className="relative mb-4">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={200}  // Reducir aún más el tamaño de las imágenes
                    height={140} // Mantener la proporción de la imagen
                    className="object-cover rounded-lg"
                  />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
      <div className="absolute top-0 left-0 w-64 h-64 -mt-32 -ml-32 opacity-20">
        <Image src="/placeholder.svg?height=256&width=256" alt="Decorative background" width={256} height={256} />
      </div>
    </section>
  )
}
