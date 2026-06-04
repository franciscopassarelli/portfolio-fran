"use client";

import { motion } from "framer-motion";
import { Code, Layout, Server } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Services() {
  const services = [

      {
      icon: <Server className="w-6 h-6 text-green-500" />,
      title: "EatCPanel",
      description: "Este software facilita la comunicación entre cocina y administración, mejora el control de insumos y reduce el desperdicio mediante un seguimiento preciso del inventario. Incluye gestión de stock, reportes de consumo y alertas de bajo stock.",
      image: "/eatcpanel.png",
      link: "https://app-cocina.vercel.app/admin",
      featured: true,
    },

     {
      icon: <Layout className="w-6 h-6 text-blue-400" />,
      title: "FoodDelivery",
      description: "Plataforma de delivery de comida que centraliza la gestión de pedidos mediante paneles para clientes, administradores y repartidores, incorporando mensajería en tiempo real para optimizar la coordinación operativa.",
      image: "/fooddelivery.png",
      link: "https://fooddeliverytest.vercel.app/",
      featured: true,
    },

     
    {
      icon: <Layout className="w-6 h-6 text-blue-500" />,
      title: "Exploramás",
      description: "app para explorar lugares turísticos. Permite a los usuarios buscar destinos, ver información y fotos. Incluye un panel de administración para gestionar destinos y fotos.",
      image: "/exploramas.png",
      link: "https://exploramas.vercel.app/",
      featured: false,
    },
    {
      icon: <Code className="w-6 h-6 text-purple-500" />,
      title: "E-commerce Contactomaq",
      description: "Landing page para empresa de venta de maquinaria agrícola. Permite a los usuarios explorar productos, ver detalles y contactar a la empresa para consultas o compras mediante mercadolibre.",
      image: "/contacto.png",
      link: "https://contactomaq.vercel.app/",
      featured: false,
    },
    {
      icon: <Server className="w-6 h-6 text-orange-400" />,
      title: "Campito Tenis - Admin",
      description: "App web para administrar turnos de canchas de tenis. Permite a los administradores gestionar reservas, horarios y clientes. Sincronizada con la app cliente vía Firebase.",
      image: "/campitoadmin.png",
      link: "https://software-el-campito.vercel.app/",
      featured: false,
    },
    {
      icon: <Server className="w-6 h-6 text-orange-400" />,
      title: "Campito Tenis - Clientes",
      description: "App web para consultar turnos en tiempo real. Sincronizada con la app de administración vía Firebase.",
      image: "/campitoclient.png",
      link: "https://el-campito-app.vercel.app/",
      featured: true,
    },

    {
      icon: <Code className="w-6 h-6 text-yellow-400" />,
      title: "Vertbien",
      description: "Sistema de gestión de stock y ventas. Permite a los usuarios administrar productos, controlar inventarios y generar reportes de ventas.",
      image: "/vertbien.png",
      link: "https://vertbien-stock-pro-v2.vercel.app/login",
      featured: false,
    },
  
    {
      icon: <Server className="w-6 h-6 text-yellow-300" />,
      title: "AuthProfile",
      description: "Creación y Exportación de CVs. Permite a los usuarios crear su perfil profesional, agregar experiencia laboral, educación y habilidades, y luego exportar su CV en formato PDF.",
      image: "/auth.png",
      link: "https://authprofile.vercel.app/",
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
                    Demo Pro
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
