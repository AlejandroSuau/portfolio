# CLAUDE.md

Este archivo da contexto persistente a Claude Code para trabajar en este proyecto.
Claude lo lee automáticamente al empezar cada sesión, así que evita repetirme estas
instrucciones a mano cada vez.

## Sobre el proyecto

Portfolio personal de **Alejandro Suau Ruiz**, programador senior en C++. El sitio se
publica en GitHub Pages y debe presentar su trayectoria, sus proyectos y su perfil
técnico de forma profesional y visualmente cuidada — nada de plantilla genérica de
"developer portfolio".

- Los datos reales (experiencia, formación, contacto) están en
  `CV_Alejandro_Suau_Ruiz.pdf`, en la raíz del repo. **Lee ese PDF antes de escribir
  ningún contenido** y usa solo información real que aparezca ahí. Si falta algo
  (enlaces a proyectos concretos, foto, redes sociales, etc.), pregúntame en vez de
  inventarlo.
- No tengo claro el stack exacto del proyecto. Antes de tocar nada, inspecciona
  `package.json`, los archivos de configuración (`vite.config.*`, `webpack.config.*`,
  etc.) y la estructura real de `src/`, `public/` y `dist/` para confirmar qué bundler
  o framework hay montado de verdad. No asumas que es Vite, Create React App o vanilla
  sin comprobarlo primero.

## Stack y restricciones

- Sitio estático para GitHub Pages → sin backend, sin rutas dinámicas de servidor.
- Mantén el stack que ya exista en el repo salvo que esté roto o no tenga sentido para
  un portfolio estático; si propones cambiarlo, explícame por qué antes de hacerlo.
- Si el proyecto resulta ser HTML+CSS+JS vanilla, está bien dejarlo así: no metas un
  framework solo por meterlo.
- Despliegue real: `vite.config.js` tiene `base: '/portfolio/'`. No hay GitHub Actions —
  `npm run deploy` (build + `gh-pages -d dist`) es lo que publica de verdad en
  `alejandrosuau.github.io/portfolio`, vía la rama `gh-pages`. Un `git push` a `main` por
  sí solo **no** actualiza el sitio en vivo; no lo confundas. Para publicar cambios, usa
  la skill `publish` en vez de ejecutar los comandos a mano.
- Cualquier ruta a un asset de `public/` referenciada desde un archivo `.js`/`.jsx` (no
  desde `index.html`) debe construirse con `import.meta.env.BASE_URL`, nunca como string
  fija tipo `/algo.png` — con `base` distinto de `/` eso rompe tanto en `npm run dev` como
  en producción.
- Responsive de verdad (mobile-first), no solo "que no se rompa en móvil".

## Dirección de diseño

- Estética seria y técnica, no plantilla de freelancer con gradientes genéricos.
  Tiene que resultar creíble para un reclutador técnico o un CTO que busca a alguien
  senior en C++: tipografía limpia (una mono para detalles técnicos/código, una sans
  para el resto), paleta oscura o de bajo contraste con un único color de acento,
  bastante espacio en blanco/negro.
- Microinteracciones sutiles sí (hover states, scroll reveal discreto); animaciones
  recargadas o efectos de "plantilla de portfolio" no.
- Optimiza imágenes y evita dependencias pesadas innecesarias: el sitio tiene que
  cargar rápido.

## Secciones del sitio

1. **Hero** — nombre, titular real (el puesto que diga el CV, ej. "Senior C++
   Engineer"), una frase de propuesta de valor.
2. **Sobre mí** — resumen de trayectoria extraído del CV.
3. **Skills** — C++ (estándares/versiones si el CV lo especifica), áreas de
   especialización (sistemas, rendimiento, concurrencia, etc.) y herramientas o
   lenguajes secundarios.
4. **Experiencia** — timeline con empresas, puestos y fechas tal cual aparecen en
   el CV.
5. **Proyectos destacados** — tarjetas con repos de GitHub: título, descripción
   breve, tags de tecnología, enlace al repo y a demo si existe. Pregúntame qué
   proyectos destacar si no es obvio a partir del CV o del propio repo de GitHub.
   No todos los proyectos tienen repo propio (p.ej. features hechas en el código de
   otra empresa) — en ese caso el enlace puede ir a otra parte o no existir. Usa la
   skill `add-project` para añadir cualquier entrada nueva, destacada o secundaria.
6. **Contacto / footer** — email, LinkedIn, GitHub y botón para descargar el CV en
   PDF directamente.

## Convenciones de trabajo

- Componentiza el HTML/JS si el stack lo permite; nada de un único archivo gigante.
- Commits en español, en imperativo y cortos (ej. "Añade sección de experiencia"). Sin
  trailer de `Co-Authored-By` ni ninguna otra atribución a Claude — aunque sea el hábito
  por defecto de Claude Code, en este repo el usuario no lo quiere.
- Antes de dar por terminada una tarea, comprueba que el build (`npm run build` o el
  comando equivalente que detectes en `package.json`) funciona sin errores.
- Accesibilidad básica: contraste suficiente, `alt` en imágenes, navegación por
  teclado en el menú.
- SEO mínimo: `<title>` descriptivo, meta description, og:image para cuando se
  comparta el enlace.
- Para publicar cambios (commit + push + deploy real a GitHub Pages), usa siempre
  la skill `publish` en vez de ejecutar `git add`/`commit`/`push` sueltos — ya tiene
  autorización del usuario para todo el flujo salvo el contenido del commit.

## Skills del proyecto

Este repo tiene skills propias en `.claude/skills/`. Invócalas en vez de reinventar el
proceso a mano cuando la petición del usuario encaje:

- **`add-project`** — interviewea al usuario (título, descripción, tags, tier
  destacado/secundario, año, imágenes, enlace) y añade la entrada a
  `src/data/projects.js`. Úsala siempre que el usuario quiera añadir, destacar o
  mostrar un proyecto nuevo en la web.
- **`publish`** — hace `git add . && git commit && git push` más `npm run deploy`
  (el paso que realmente actualiza `alejandrosuau.github.io/portfolio`, vía la rama
  `gh-pages`). Solo pregunta qué va en el mensaje del commit; el resto corre sin
  pedir confirmación adicional porque el usuario ya lo autorizó de antemano. Úsala
  cuando el usuario diga "publica esto", "sube los cambios", "despliega" o
  equivalentes — no le expliques los pasos manuales, hazlo.

## Qué NO hacer

- No inventar proyectos, empresas, fechas o cifras que no estén en el CV o en el
  repo.
- No añadir frameworks o librerías nuevas "porque sí", sin justificación.
- No romper el despliegue a GitHub Pages.
