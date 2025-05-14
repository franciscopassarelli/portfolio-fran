"use client";

import { motion } from "framer-motion";
import { BoxIcon, Code, Layout, Server } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      icon: <BoxIcon className="w-6 h-6 text-blue-400" />,
      title: "Sistema de Stock y Métricas",
      description: "App web para gestionar productos, precios y métricas. Actualmente en uso. Hecha con React, Tailwind y Firebase.",
      image: "panel.png",
      link: "https://sistemastock.vercel.app/",
      featured: true,
    },
    {
      icon: <Code className="w-6 h-6 text-purple-200" />,
      title: "Tienda Frantenis",
      description: "E-commerce autoadministrable, tienda online para tenis. Hecha con Next.js y Firebase.",
      image: "frantenis.png",
      link: "https://tenisweb.vercel.app/",
      featured: true,
    },
    {
      icon: <Layout className="w-6 h-6 text-blue-500" />,
      title: "Exploramás",
      description: "App de reservas para agencia de viajes. Este proyecto es una simulación laboral grupal en No Countri. Se usó React, Tailwind, Firebase, Docker.",
      image: "exploramas.png",
      link: "https://exploramas.vercel.app/",
      featured: false,
    },
    {
      icon: <Code className="w-6 h-6 text-purple-500" />,
      title: "E-commerce Contactomaq",
      description: "Tienda online con integración Mercado Libre. Para cliente de empresa, proyecto freelance. Next.js + Tailwind.",
      image: "ecommerce.png",
      link: "https://contactomaq.vercel.app/",
      featured: false,
    },
    {
      icon: <Server className="w-6 h-6 text-orange-400" />,
      title: "Campito Tenis - Admin",
      description: "App web para administrar turnos. Vinculada con la app cliente vía Firebase. Hecha con React.",
      image: "campitoclub.png",
      link: "https://software-el-campito.vercel.app/",
      featured: true,
    },
    {
      icon: <Server className="w-6 h-6 text-orange-400" />,
      title: "Campito Tenis - Clientes",
      description: "App web para consultar turnos en tiempo real. Sincronizada con la de administración. Hecha con React.",
      image: "Reserva.png",
      link: "https://el-campito-app.vercel.app/",
      featured: true,
    },
    {
      icon: <Server className="w-6 h-6 text-green-500" />,
      title: "CostoFinal",
      description: "Calculadora de precios para emprendedores. React, Tailwind y ShadCN.",
      image: "coste.png",
      link: "https://costo-final.vercel.app/",
      featured: false,
    },
    {
      icon: <Code className="w-6 h-6 text-yellow-400" />,
      title: "Movie App",
      description: "App para buscar películas usando API externa.",
      image: "movie.png",
      link: "https://compucine.vercel.app/",
      featured: false,
    },
    {
      icon: <Layout className="w-6 h-6 text-blue-400" />,
      title: "BurgerBeer",
      description: "Tienda online con carrito de compras. JavaScript puro.",
      image: "burger.png",
      link: "https://franciscopassarelli.github.io/Burguer-B/",
      featured: false,
    },
    {
      icon: <Server className="w-6 h-6 text-yellow-300" />,
      title: "AuthProfile",
      description: "App para crear y exportar CVs. Hecha en React y TypeScript.",
      image: "gestorcv.png",
      link: "https://authprofile.vercel.app/",
      featured: false,
    },
    {
      icon: <Server className="w-6 h-6 text-green-500" />,
      title: "QuePrecio",
      description: "Calculadora inteligente de precios con enfoque comercial.",
      image: "Queprecio.png",
      link: "https://que-precio.vercel.app/",
      featured: false,
    },
    {
      icon: <Server className="w-6 h-6 text-green-500" />,
      title: "Rick and Morty",
      description: "App para buscar personajes de la serie usando API externa.",
      image: "rickimage.png",
      link: "https://ricky-morthy.vercel.app/",
      featured: false,
    }
  ];

  const orderedServices = [
    ...services.filter((s) => s.featured),
    ...services.filter((s) => !s.featured),
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
          {orderedServices.map((service, index) => (
            <Link key={index} href={service.link} target="_blank">
              <motion.div
                className={`relative bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 h-full ${
                  service.featured ? "border-2 border-green-400" : ""
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {service.featured && (
                  <span className="absolute top-2 right-2 text-xs bg-green-500 text-white px-2 py-0.5 rounded">
                    En uso
                  </span>
                )}
                <div className="flex items-center mb-4">
                  {service.icon}
                  <h3 className="text-sm font-semibold ml-4 dark:text-white">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-xs mb-4">
                  {service.description}
                </p>
                <div className="relative mb-4">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={200}
                    height={140}
                    className="object-cover rounded-lg"
                  />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
      <div className="absolute top-0 left-0 w-64 h-64 -mt-32 -ml-32 opacity-20">
        <Image
          src="/placeholder.svg?height=256&width=256"
          alt="Decorative background"
          width={256}
          height={256}
        />
      </div>
    </section>
  );
}
