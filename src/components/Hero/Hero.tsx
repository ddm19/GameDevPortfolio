import { motion } from "framer-motion"
import "./Hero.scss"
import ProjectPageCarousel, { CarouselItem } from "components/ProjectPageCarousel/ProjectPageCarousel"

const Hero = () => {
    const scrollToProjects = () => {
        const projectsSection = document.getElementById("projects")
        if (projectsSection) {
            const timeout = setTimeout(() => {
                projectsSection.scrollIntoView({ behavior: "smooth" })
            }, 100)
            return () => clearTimeout(timeout)
        }
    }

    const carouselItems: CarouselItem[] = [
        {
            src: "/projects/rat/RAT1.gif",
            alt: "Captura de un proyecto destacado",
        },
        {
            src: "/projects/rat/RAT2.gif",
            alt: "Captura de proyecto destacado RAT",
        },
        {
            src: "/projects/purpleshift/PurpleShift1.gif",
            alt: "Captura de proyecto destacado Purple Shift",
        },
        {
            src: "/projects/ROH/board.png",
            alt: "Captura de proyecto destacado Runes of Hispania",
        },
        {
            src: "/projects/ttrpg/ranidos.png",
            alt: "Captura de proyecto destacado D&D 5e: Expansión de Sistemas",
        },
        {
            src: "/projects/ttrpg/alchemy.png",
            alt: "Captura de proyecto destacado D&D 5e: Expansión de Sistemas",
        }
    ]

    return (
        <section className="hero">
            <div className="hero-bg" >
                <ProjectPageCarousel
                    items={carouselItems}
                    settings={{
                        loop: true,
                        autoplay: true,
                        delay: 4500,
                        draggable: false,
                        showArrows: false,
                        showDots: false
                    }}
                />
            </div>
            <motion.div
                className="hero-content"
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: {},
                    visible: {
                        transition: {
                            staggerChildren: 0.2
                        }
                    }
                }}
            >
                <motion.h1
                    variants={{
                        hidden: { opacity: 0, y: 40 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    transition={{ duration: 0.8 }}
                >
                    Dani <motion.span className="highlight">TheDM</motion.span>
                </motion.h1>

                <motion.h2
                    variants={{
                        hidden: { opacity: 0, y: 40 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    transition={{ duration: 0.8 }}
                >
                    Game Designer & Developer
                </motion.h2>

                <motion.a
                    className="cta"
                    variants={{
                        hidden: { opacity: 0, y: 40 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    transition={{ duration: 0.8 }}
                    onClick={scrollToProjects}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.15 }}
                >
                    Ver proyectos
                </motion.a>
            </motion.div>
            <div className="potion">
                <div className="liquid" />
            </div>
        </section>
    )
}

export default Hero
