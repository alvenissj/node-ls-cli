const plataformaCertificaciones = {
  nombrePlataforma: "TechPro Academy",
  version: "2.0.0",
  pais: "Colombia",
  categorias: {
    tecnologia: [
      {
        id: "TEC-001",
        titulo: "Node",
        descripcion:
          "Diseño y construcción de APIs REST escalables usando Node.js, Express y MongoDB.",
        nivel: "intermedio",
        idioma: "Español",
        modalidad: "Online",
        duracionHoras: 42,
        precioUSD: 79,
        moneda: "USD",
        certificado: true,
        estado: "activo",
        fechaPublicacion: "2025-01-15",
        instructor: {
          nombre: "Carlos Mendoza",
          experienciaAnios: 8,
          especialidad: "Backend & Cloud Architecture",
          ratingInstructor: 4.8,
        },
        estadisticas: {
          estudiantesInscritos: 3250,
          vistas: 18700,
          ratingPromedio: 4.7,
          totalResenas: 540,
        },
        etiquetas: ["Node.js", "API REST", "MongoDB", "Backend"],
        requisitos: [
          "Conocimientos básicos de JavaScript",
          "Fundamentos de programación",
          "Manejo básico de bases de datos",
        ],
        objetivos: [
          "Construir APIs REST profesionales",
          "Implementar autenticación JWT",
          "Aplicar buenas prácticas de arquitectura",
        ],
      },
      {
        id: "TEC-002",
        titulo: "React",
        descripcion:
          "Desarrollo de aplicaciones modernas con React, Hooks y consumo de APIs.",
        nivel: "basico",
        idioma: "Español",
        modalidad: "Online",
        duracionHoras: 50,
        precioUSD: 89,
        moneda: "USD",
        certificado: true,
        estado: "activo",
        fechaPublicacion: "2025-02-10",
        instructor: {
          nombre: "Laura Gómez",
          experienciaAnios: 6,
          especialidad: "Frontend & UX",
          ratingInstructor: 4.9,
        },
        estadisticas: {
          estudiantesInscritos: 4100,
          vistas: 22300,
          ratingPromedio: 4.8,
          totalResenas: 720,
        },
        etiquetas: ["React", "Hooks", "Frontend", "JavaScript"],
        requisitos: [
          "JavaScript intermedio",
          "HTML y CSS",
          "Conceptos básicos de APIs",
        ],
        objetivos: [
          "Construir SPA modernas",
          "Consumir APIs REST",
          "Optimizar rendimiento en React",
        ],
      },
    ],

    negocios: [
      {
        id: "NEG-001",
        titulo: "Scrum",
        descripcion:
          "Implementación de metodologías ágiles para equipos de alto rendimiento.",
        nivel: "intermedio",
        idioma: "Español",
        modalidad: "Online + Taller en Vivo",
        duracionHoras: 30,
        precioUSD: 69,
        moneda: "USD",
        certificado: true,
        estado: "activo",
        fechaPublicacion: "2024-11-20",
        instructor: {
          nombre: "Andrés Ramírez",
          experienciaAnios: 10,
          especialidad: "Project Management",
          ratingInstructor: 4.6,
        },
        estadisticas: {
          estudiantesInscritos: 2890,
          vistas: 15200,
          ratingPromedio: 4.5,
          totalResenas: 410,
        },
        etiquetas: ["Scrum", "Agile", "Project Management"],
        requisitos: [
          "Experiencia básica en equipos de trabajo",
          "Interés en gestión de proyectos",
        ],
        objetivos: [
          "Aplicar Scrum en proyectos reales",
          "Gestionar equipos ágiles",
          "Mejorar productividad organizacional",
        ],
      },
    ],
  },
};

module.exports.cursos = plataformaCertificaciones;
