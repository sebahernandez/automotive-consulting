type Service = {
  title: string;
  description: string;
  icon: string; // Podrías usar un tipo más específico si planeas procesar los SVG de alguna forma
  image: string;
  imageDimensions: {
    width: number;
    height: number;
  };
};

export const services: Service[] = [
  {
    title: "Asesoría Automotriz",
    description:
      "Te asesoramos para encontrar el vehículo ideal según tu estilo de vida, presupuesto y precios de mercado.",
    icon: "/images/icons/icon1.png",
    image: "/images/servicios/service-01.png",
    imageDimensions: {
      width: 200,
      height: 200,
    },
  },
  {
    title: "Compra Venta",
    description:
      "Amplio stock de vehículos garantizados con entrega inmediata. Compramos tu auto y pagamos al instante.",
    icon: "/images/icons/icon2.png",
    image: "/images/servicios/service-02.png",
    imageDimensions: {
      width: 200,
      height: 200,
    },
  },
  {
    title: "Trámites Notariales",
    description:
      "Gestión profesional de documentación vehicular con trámites digitales gracias a nuestra alianza con Autofactpro.",
    icon: "/images/icons/icon3.png",
    image: "/images/servicios/service-03.png",
    imageDimensions: {
      width: 200,
      height: 200,
    },
  },
  {
    title: "Crédito Automotriz",
    description:
      "Compra con financiamiento y múltiples formas de pago para agilizar y transparentar la gestión de créditos con socios comerciales.",
    icon: "/images/icons/icon4.png",
    image: "/images/servicios/service-04.png",
    imageDimensions: {
      width: 200,
      height: 200,
    },
  },
];
