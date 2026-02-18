import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import About from "components/About"
import Contact from "components/Contact"
import Hero from "components/Hero"
import Navbar from "components/Navbar"
import Projects from "components/Projects"
import FlippingBook from "components/FlippingBook"
import "./Home.scss"

const Home = () => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 4400)
        return () => clearTimeout(timer)
    }, [])

    return (
        <div className="home">
            <AnimatePresence>
                {loading && (
                    <motion.div
                        className="loader"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6 }}
                    >

                        <FlippingBook />

                        <motion.div
                            className="potion-wrapper"
                            animate={{ y: [0, -3, 0], rotate: [0, 3, -3, 0] }}
                            transition={{ repeat: Infinity, repeatType: "reverse", duration: 3, ease: "easeInOut" }}
                        >

                            <img src="/potion.svg" alt="Magic Potion" className="potion-flask " draggable="false" />
                            <div className="liquids-mask">
                                <motion.div
                                    className="liquid green"
                                    animate={{
                                        height: ["25%", "35%", "25%"], skewX: [0, 5, 8, 5, 0, -5, -8, -5, 0], skewY: [0, -5, -8, -5, 0, 5, 8, 5, 0]

                                    }}
                                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                                />

                                <div className="bubbles">
                                    <div className="bubble b1" />
                                    <div className="bubble b2" />
                                    <div className="bubble b3" />
                                </div>
                            </div>

                        </motion.div>
                        <motion.h1
                            className="loader-title"
                        >
                            <span className="base">Dani Domenech</span>
                            <motion.span
                                className="fill"
                                initial={{ width: "0%" }}
                                animate={{ width: ["0%", "33%", "66%", "100%"] }}
                                transition={{ duration: 3.5, ease: "easeInOut" }}
                            >
                                Dani Domenech
                            </motion.span>
                        </motion.h1>

                        <motion.div
                            className="logo-wrapper"
                            initial={{ scale: 0.6, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                        </motion.div>
                        <motion.div
                            className="potion-wrapper potion-wrapper--right"
                            animate={{ y: [0, -3, 0], rotate: [0, -3, 3, 0] }}
                            transition={{ repeat: Infinity, repeatType: "reverse", duration: 3, ease: "easeInOut" }}
                        >
                            <img src="/potion.svg" alt="Magic Potion" className="potion-flask" draggable="false" />

                            <div className="liquids-mask">
                                <motion.div
                                    className="liquid blue"
                                    animate={{
                                        height: ["25%", "35%", "25%"], skewX: [0, -5, -8, -5, 0, 5, 8, 5, 0], skewY: [0, 5, 8, 5, 0, -5, -8, -5, 0]

                                    }}
                                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                                />
                                <div className="bubbles">
                                    <div className="bubble b1" />
                                    <div className="bubble b2" />
                                    <div className="bubble b3" />
                                </div>
                            </div>


                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <Navbar />

            {!loading && (
                <>
                    <Hero />
                    <Projects />
                    <About />
                    <Contact />
                </>
            )}
        </div>
    )
}

export default Home