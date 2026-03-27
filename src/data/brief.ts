import {
  BookText,
  Clapperboard,
  Palette,
  ScrollText,
} from "lucide-react";
import type {
  BriefSection,
  Deliverable,
  GradeScale,
  Recommendation,
  RubricCriterion,
} from "../types";

export const sections: BriefSection[] = [
  {
    id: "hero",
    label: "Portada",
    title: "Brief de Proyecto: Cortometraje Animado",
    eyebrow: "Propuesta profesional de preproducción",
  },
  {
    id: "contexto",
    label: "Contexto",
    title: "Contexto del proyecto",
    content: [
      "Este proyecto simula un encargo profesional real dentro de un estudio de animación. Cada equipo asumirá el rol de un equipo creativo encargado de desarrollar la propuesta completa de preproducción de un cortometraje animado original, desde la concepción narrativa hasta la definición estética del proyecto. Cada equipo debe definir, como mínimo, los roles de director, productor y director de arte.",
      "El objetivo es demostrar la capacidad de integrar narrativa, diseño visual, composición secuencial y dirección artística en un paquete coherente que pueda presentarse ante un productor, un cliente o un jurado profesional. Los equipos competirán entre sí y solo se elegirán 2 propuestas para desarrollarlas durante el resto del semestre.",
    ],
  },
  {
    id: "objetivo",
    label: "Objetivo",
    title: "Objetivo de aprendizaje",
    content: [
      "Desarrollar una propuesta integral de preproducción para un cortometraje animado, articulando la narrativa escrita con la narrativa visual a través de herramientas profesionales del pipeline de animación: guion, storyboard, diseño de personajes y dirección artística.",
    ],
  },
  {
    id: "entregables",
    label: "Entregables",
    title: "Entregables obligatorios",
    content: [
      "Los cuatro entregables deben funcionar como un sistema integrado. Cada pieza define una capa del proyecto: estructura narrativa, planificación visual, consistencia del personaje y dirección artística.",
    ],
  },
  {
    id: "especificaciones",
    label: "Técnica",
    title: "Especificaciones técnicas",
  },
  {
    id: "rubrica",
    label: "Rúbrica",
    title: "Rúbrica de evaluación",
  },
  {
    id: "recomendaciones",
    label: "Consejos",
    title: "Recomendaciones estratégicas",
  },
];

export const deliverables: Deliverable[] = [
  {
    id: "guion",
    title: "Guion",
    icon: ScrollText,
    summary:
      "Documento fundacional del cortometraje, redactado en formato profesional de guion audiovisual.",
    requirements: [
      "Estructura narrativa con inicio, nudo y desenlace claramente identificables.",
      "Conflicto central definido que motive la acción del personaje.",
      "Arco del personaje visible entre el inicio y el final.",
      "Diálogos naturales, funcionales y coherentes con la personalidad del personaje, si aplica.",
      "Duración estimada entre 1 y 3 minutos.",
      "Formato profesional con INT/EXT, acción y diálogos centrados.",
    ],
    formatNote: "Tipografía sugerida: Courier New 12 pt.",
  },
  {
    id: "storyboard",
    title: "Storyboard",
    icon: Clapperboard,
    summary:
      "Plano de construcción visual del guion: define qué se ve, cómo se encuadra y cómo fluye el ritmo.",
    requirements: [
      "Cobertura completa del guion en viñetas secuenciales.",
      "Variedad de encuadres: planos generales, medios, primeros planos, picados y contrapicados.",
      "Indicaciones de cámara con flechas o notas para paneos, zooms, travellings y transiciones.",
      "Anotaciones técnicas con acción, diálogo y sonido cuando aplique.",
      "Ritmo visual que comunique tempo narrativo, pausas y clímax.",
      "Mínimo 12 viñetas; técnica libre, digital o análoga digitalizada.",
    ],
  },
  {
    id: "character-sheet",
    title: "Character Sheet",
    icon: BookText,
    summary:
      "Documento técnico de referencia para mantener la consistencia del personaje principal y secundarios.",
    requirements: [
      "Vistas ortogonales: frente, perfil, tres cuartos y espalda.",
      "Mínimo 5 expresiones faciales que muestren rango emocional.",
      "Al menos 2 poses de acción o actitud característica.",
      "Escala comparativa con otro personaje u objeto de referencia.",
      "Paleta de color con códigos hex o equivalentes claros.",
      "Notas de diseño sobre materiales, texturas, accesorios y detalles constructivos.",
    ],
  },
  {
    id: "moodboard",
    title: "Moodboard",
    icon: Palette,
    summary:
      "Documento de dirección artística que comunica la atmósfera, la paleta y los referentes visuales del cortometraje.",
    requirements: [
      "Paleta cromática justificada con relación al tono del proyecto.",
      "Referentes de estilo tomados de animaciones, ilustraciones o arte.",
      "Texturas y acabados que comuniquen la materialidad visual.",
      "Iluminación y atmósfera respaldadas con referencias concretas.",
      "Anotaciones explicativas en cada referencia o bloque visual.",
      "Formato diagramado de 1 a 3 páginas, no collage improvisado.",
    ],
  },
];

export const technicalSpecs = [
  "Equipos de 3 estudiantes.",
  "Entrega digital: todo debe estar compilado en una presentacion de Canva.",
  "La presentacion no debe ser una plantilla predisenada; debe construirse desde cero.",
  "El diseno de la presentacion debe responder a la estetica y direccion artistica del cortometraje.",
  "Tipografía del guion: Courier New 12 pt.",
  "Deadline: jueves 16 de abril.",
  "Toda propuesta entregada fuera de la fecha tendra una penalizacion de -1.0 punto en la calificacion.",
];

export const rubricCriteria: RubricCriterion[] = [
  {
    id: "guion",
    name: "Guion",
    weight: 20,
    excellent:
      "Estructura narrativa clara, conflicto definido, arco coherente, diálogos naturales y tono consistente.",
    good:
      "Estructura reconocible, pero con debilidades en conflicto o diálogos; arco identificable pero poco desarrollado.",
    acceptable:
      "Idea con potencial, aunque la estructura es confusa, los diálogos son forzados o falta cohesión narrativa.",
    insufficient:
      "No se entrega guion o el texto carece de estructura, conflicto y coherencia mínima.",
  },
  {
    id: "storyboard",
    name: "Storyboard",
    weight: 25,
    excellent:
      "Encuadres variados y expresivos, indicaciones de cámara, transiciones claras, ritmo visual sólido y anotaciones técnicas completas.",
    good:
      "Refleja la historia, pero los encuadres son poco variados o faltan algunas anotaciones relevantes.",
    acceptable:
      "Cubre escenas principales, pero la composición es plana, faltan encuadres clave y no comunica bien el ritmo visual.",
    insufficient:
      "No refleja el guion, carece de secuencia lógica y no incluye indicaciones técnicas básicas.",
  },
  {
    id: "character",
    name: "Character Sheet",
    weight: 25,
    excellent:
      "Vistas múltiples, expresiones variadas, poses de acción, escala comparativa, paleta definida y notas de diseño con personalidad coherente.",
    good:
      "Incluye al menos tres vistas y algunas expresiones, pero falta escala, paleta o notas; el personaje es consistente aunque genérico.",
    acceptable:
      "Tiene pocas vistas, sin expresiones ni poses suficientes, y el diseño no dialoga con el tono de la historia.",
    insufficient:
      "Solo presenta un dibujo aislado sin vistas, consistencia visual ni relación con el proyecto.",
  },
  {
    id: "moodboard",
    name: "Moodboard",
    weight: 15,
    excellent:
      "Dirección artística clara con referencias coherentes, paleta cromática, texturas, iluminación y anotaciones justificadas.",
    good:
      "Referencias pertinentes pero desiguales; las anotaciones son vagas y la dirección artística se intuye más de lo que se comunica.",
    acceptable:
      "Imágenes sin cohesión visual ni anotaciones suficientes; no define una dirección artística clara.",
    insufficient:
      "No hay moodboard o las imágenes no guardan relación con el proyecto.",
  },
  {
    id: "coherencia",
    name: "Coherencia global",
    weight: 15,
    excellent:
      "Todos los entregables funcionan como un sistema integrado y la presentación es profesional, ordenada y bien diagramada.",
    good:
      "Existe coherencia general con inconsistencias menores entre piezas; la presentación es adecuada.",
    acceptable:
      "Hay desconexión visible entre entregables y una presentación descuidada o poco unificada.",
    insufficient:
      "Los entregables no se relacionan entre sí y la presentación es desordenada o incompleta.",
  },
];

export const gradeScale: GradeScale[] = [
  {
    level: "Excelente",
    range: "4.5 - 5.0",
    description: "Supera las expectativas.",
  },
  {
    level: "Bueno",
    range: "3.5 - 4.4",
    description: "Cumple satisfactoriamente.",
  },
  {
    level: "Aceptable",
    range: "3.0 - 3.4",
    description: "Cumple los mínimos.",
  },
  {
    level: "Insuficiente",
    range: "0 - 2.9",
    description: "No cumple los mínimos.",
  },
];

export const recommendations: Recommendation[] = [
  {
    id: "guion-primero",
    text: "Trabajen primero el guion y valídenlo como equipo antes de avanzar al storyboard. Un guion débil casi siempre produce una secuencia confusa.",
  },
  {
    id: "enfoque-profesional",
    text: "Piensen en el cortometraje como un producto real para un productor, un festival o un jurado. La calidad de la propuesta comunica su nivel profesional.",
  },
  {
    id: "character-sheet",
    text: "El character sheet no es un dibujo bonito: es un documento técnico que debe permitir que cualquier integrante del equipo reproduzca al personaje con consistencia. Busquen referentes de Character Sheet en Pinterest antes de diseñar la versión final.",
  },
  {
    id: "moodboard",
    text: "El moodboard es una herramienta de decisión. Cada referencia debe estar allí por una razón visual, narrativa o atmosférica claramente defendible.",
  },
  {
    id: "coherencia",
    text: "Cuiden la coherencia entre entregables. Si la estética del moodboard y la paleta del personaje no conversan, el proyecto pierde dirección artística.",
  },
  {
    id: "referentes",
    text: "Consulten referentes profesionales de estudios como Pixar, Studio Ghibli, Cartoon Saloon, Laika y Aardman para calibrar nivel de detalle, intención visual y acabado.",
  },
];

export const courseInfo = {
  subject: "Dibujo Animado Digital",
  program: "Programa Diseño Gráfico",
  institution: "Areandina Valledupar",
  term: "2026-1",
  teacher: "Prof. Odis",
};
