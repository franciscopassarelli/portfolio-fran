"use client"

import { motion } from "framer-motion"
import { BoxIcon, Code, Layout, Server, Smartphone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Services() {
  const services = [
    {
      icon: <BoxIcon className="w-6 h-6 text-blue-400" />,
      title: "Sistema de Stock y Métricas",
      description: "Desarrollado con React, Tailwind CSS y Firebase. Permite gestionar productos, precios y métricas de forma simple. Actualmente en uso; esta versión es una demo.",
      image: "panel.png",
      link: "https://sistemastock.vercel.app/"
    },
    {
      icon: <Layout className="w-6 h-6 text-blue-500" />,
      title: "Exploramás",
      description: "Responsable del frontend en una agencia de viajes durante mis prácticas en NoCountry. Implementé reservas flexibles, tarifas exclusivas y paneles administrativos usando React, Tailwind CSS, Git y Docker.",
      image: "exploramas.png",
      link: "https://exploramas.vercel.app/"
    },
    {
      icon: <Server className="w-6 h-6 text-yellow-300" />,
      title: "AuthProfile",
      description: "App en React y TypeScript para crear y exportar CVs. Incluye login, registro y gestión de perfil con Material UI.",
      image: "gestorcv.png",
      link: "https://authprofile.vercel.app/"
    },
    {
      icon: <Code className="w-6 h-6 text-purple-500" />,
      title: "E-commerce Contactomaq",
      description: "Tienda online integrada con Mercado Libre. Construida con Next.js y Tailwind CSS para venta de repuestos y gestión de productos.",
      image: "ecommerce.png",
      link: "https://contactomaq.vercel.app/"
    },
    {
      icon: <Code className="w-6 h-6 text-purple-200" />,
      title: "Tienda Frantenis",
      description: "Tienda online para venta de tenis. Usa Next.js, Tailwind CSS y Firebase para autenticación y gestión de productos en tiempo real.",
      image: "frantenis.png",
      link: "https://next-aplication-five.vercel.app/"
    },
    {
      icon: <Server className="w-6 h-6 text-green-500" />,
      title: "CostoFinal",
      description: "Calculadora de costos para PYMES y emprendedores. Permite conocer el precio final de productos sumando impuestos y comisiones. Hecho con React, Tailwind y ShadCN.",
      image: "coste.png",
      link: "https://costo-final.vercel.app/"
    },
    {
      icon: <Code className="w-6 h-6 text-yellow-400" />,
      title: "Movie App",
      description: "App para buscar películas mediante una API externa. Incluye formulario de contacto, sección de ayuda y feedback automático.",
      image: "movie.png",
      link: "https://movie-app-beige-chi.vercel.app/"
    },
    {
      icon: <Server className="w-6 h-6 text-orange-400" />,
      title: "Campito Tenis",
      description: "Software para gestión de turnos, torneos y rankings de jugadores en un club de tenis. Hecho con React.",
      image: "campitoclub.png",
      link: "https://software-el-campito-tenis-club.vercel.app/"
    },
    {
      icon: <Layout className="w-6 h-6 text-blue-400" />,
      title: "BurgerBeer",
      description: "Tienda online con carrito de compras. Hecha con JavaScript, CSS y SweetAlert para alertas personalizadas.",
      image: "burger.png",
      link: "https://franciscopassarelli.github.io/Burguer-B/"
    },
    {
      icon: <Server className="w-6 h-6 text-green-500" />,
      title: "QuePrecio",
      description: "Calculadora inteligente de precios. Similar a CostoFinal, pero con enfoque en márgenes y estrategias comerciales. React, Tailwind y ShadCN.",
      image: "Queprecio.png",
      link: "https://que-precio.vercel.app/"
    }
  ];
  

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
