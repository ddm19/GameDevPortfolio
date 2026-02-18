import { motion } from "framer-motion"

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-bg" />
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
                    Dani
                </motion.h1>

                <motion.h2
                    variants={{
                        hidden: { opacity: 0, y: 40 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    transition={{ duration: 0.8 }}
                >
                    Game Designer & Systems Thinker
                </motion.h2>

                <motion.a
                    href="#projects"
                    className="cta"
                    variants={{
                        hidden: { opacity: 0, y: 40 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    transition={{ duration: 0.8 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
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
