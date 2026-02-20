import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import "./RAT.scss"

const pillars = [
    "Enfoque en combate táctico por zonas 2vs2.",
    "Distinción clara entre 2 rutas principales. Una enfocada a armas largas y otra a corto alcance.",
    "Planteamiento de una mecánica de esconder un objetivo clave (un maletín) que el equipo atacante debe recuperar para ganar la ronda.",
    "Diseño de mapa de forma que se incentive el uso de la mecánica de espiar el POV del enemigo."
]

const processSteps = [
    {
        title: "1. Research y Referencias",
        description:
            <>
                <p>Esta fase trata sobre buscar inspiración en mapas de shooters tácticos existentes, analizar sus puntos fuertes y debilidades.</p>
                <p>Las referencias obtenidas para este proyecto incluyen mapas como Inferno o la zona de Túneles subterráneos de Rust</p>
                <img src="/RAT-References.png" alt="Collage de mapas de referencia, incluyendo Inferno y Rust" loading="lazy" className="rat__image" draggable="false" />

            </>
    },
    {
        title: "2. Layout Macro",
        description:
            <>
                <p>En esta etapa se definió un primer estado del mapa mediante un layout inicial. Clarificando zonas (Larga y corta) y la dispisición de coberturas e interiores</p>
                <p>El proceso se iteró hasta definir critical paths de los personajes, tratando de maximizar la cantidad de caminos y rutas escogibles.</p>
                <img src="/RAT-Layout.png" alt="Layout inicial del mapa, mostrando zonas largas y cortas, con puntos de interés y rutas principales" loading="lazy" className="rat__image" draggable="false" />
            </>
    },
    {
        title: "3. Blockout Funcional",
        description:
            <>
                <p>El layout se llevo a un blockout funcional en Unreal Engine, donde se ajustaron las dimensiones y se ajustaron coberturas y zonas.</p>
                <p>Además se añadieron elementos nuevos como túneles y vías de escape, tratando de solucionar <b>vías sin salida</b> que existían en el mapa.</p>
            </>
    },

]

const deliverables = [
    "Documento de visión y objetivos de diseño.",
    "Layout de mapa.",
    "Blockout jugable con iteraciones versionadas.",
    "Blockout funcional + capturas de proceso."
]

const blockoutShots = [
    {
        src: "/RAT1.gif",
        title: "Larga / Tren",
        caption: "Esta zona busca ser un punto de control y escondite clave. Con zonas de larga visión y el tren como punto de escondite y defensa de maletín."
    },
    {
        src: "/RAT2.gif",
        title: "Túnel y Ruta de Escape en Larga",
        caption: "Esta vía de escape se ideó como solución a una vía sin salida para un equipo en la zona de larga. La zona alta tiene pensada desventajas como rendijas para que no se pueda usar como ventaja táctica sino solo como ruta de escape o flanqueo."
    },
    {
        src: "/RAT3.gif",
        title: "Zona Corta y Túnel Flanqueo",
        caption:
            <>
                Esta zona está pensada para el uso de armas cortas, con muchas coberturas y puntos de control.
                Además el túnel busca compensar una ventaja táctica del equipo que tiene más cerca la sala central y una mejor disposición de coberturas.
                <p>
                    Desde el centro se clarifica la salida del túnel mediante una <span style={{ color: '#ff0000' }}>luz roja</span>, de forma que el jugador la vea antes de entrar y pueda saber a dónde lleva fácilmente."
                </p>
            </>
    }
]

const metrics = [
    { label: "Ronda de preparación (esconder maletín por el equipo defensor)", value: "Entre 60 y 120 segundos" },
    { label: "Tiempo promedio de ronda (ataque y defensa)", value: "Entre 2 y 5 minutos" },
    { label: "Tiempo promedio en recorrer el mapa (completo)", value: "Entre 1 y 2 minutos" },

]

const RAT = () => {
    return (
        <main className="rat">
            <section className="rat__hero">
                <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="rat__heroContent"
                >
                    <p className="rat__eyebrow">Caso de Estudio - Nivel de Shooter Táctico</p>
                    <h1>RAT</h1>
                    <p className="rat__lead">
                        Diseño de una experiencia tactica, con foco en layout, mecánica de espionaje y foco en esconder un objetivo clave en el mapa.
                        El proyecto incluyo desde la concepcion de la vision de combate, hasta el desarrollo de un prototipo jugable.
                    </p>

                    <div className="rat__chips">
                        <span>Rol: Game Designer</span>
                        <span>Area: Level + Systems Design</span>
                        <span>Estado: Prototipo y Blockout Iterativo</span>
                        <span>Fase de desarrollo: 2ª Iteración</span>

                    </div>

                    <div className="rat__actions">
                        <a href="#rat-video">Ver video</a>
                        <Link to="/?noLogo=true">Volver al portfolio</Link>
                    </div>
                </motion.div>
            </section>

            <section className="rat__section">
                <h2>Descripción del proyecto</h2>
                <p className="rat__text">
                    Un shooter táctico 2vs2 inspirado en títulos como Counter Strike o Valorant, con una mecánica donde los jugadores pueden observar el POV del enemigo en cualquier momento.
                </p>
                <p className="rat__text">
                    Un equipo debe esconder un maletín en alguna parte del mapa durante una fase de preparación. Luego el equipo contrario debe encontrar y abrir dicho maletín o eliminar
                    al equipo contrario para ganar la ronda. El diseño del mapa se enfoca en crear rutas distintas para armas largas y cortas, con zonas de control clave que incentivan el uso
                    de la mecánica de espionaje para obtener ventaja táctica.
                </p>
            </section>

            <section className="rat__section">
                <h2>Pilares de Diseño</h2>
                <div className="rat__pillars">
                    {pillars.map((pillar) => (
                        <article key={pillar} className="rat__card">
                            <p>{pillar}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="rat__section">
                <h2>Proceso</h2>
                <div className="rat__timeline">
                    {processSteps.map((step) => (
                        <article key={step.title} className="rat__timelineItem">
                            <h3>{step.title}</h3>
                            <p>{step.description}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="rat__section">
                <h2>Blockout y Layout</h2>
                <div className="rat__gallery">
                    {blockoutShots.map((shot) => (
                        <figure key={shot.title} className="rat__shot">
                            <img src={shot.src} alt={shot.title} loading="lazy" draggable="false" />
                            <figcaption>
                                <h3>{shot.title}</h3>
                                <p>{shot.caption}</p>
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </section>

            <section id="rat-video" className="rat__section">
                <h2>Video Walkthrough</h2>
                <p className="rat__text">
                    Este vídeo muestra un walkthrough del blockout funcional en su versión actual.
                </p>
                <div className="rat__videoWrap">
                    <video controls preload="metadata" poster="/RAT2.gif">
                        <source src="/RAT-Preview.mp4" type="video/mp4" />
                        Tu navegador no soporta video HTML5. 🤨
                    </video>
                </div>
            </section>

            <section className="rat__section">
                <h2>Entregables del Proyecto</h2>
                <ul className="rat__list">
                    {deliverables.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </section>

            <section className="rat__section">
                <h2>Metricas de Iteracion</h2>
                <div className="rat__metrics">
                    {metrics.map((metric) => (
                        <article key={metric.label} className="rat__metric">
                            <strong>{metric.value}</strong>
                            <span>{metric.label}</span>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    )
}

export default RAT
