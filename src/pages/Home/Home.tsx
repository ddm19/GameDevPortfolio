import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Contact from "components/Contact/Contact"
import Hero from "components/Hero/Hero"
import Navbar from "components/Navbar/Navbar"
import Projects from "components/Projects/Projects"
import FlippingBook from "components/FlippingBook/FlippingBook"
import "./Home.scss"
import "components/Loader/Loader.scss"
import About from "components/About/About"

const Home = () => {
    const [loading, setLoading] = useState(true)
    const params = new URLSearchParams(window.location.search);

    useEffect(() => {
        if (params.get("noLogo")) {
            setLoading(false)
        }
    }, [])

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
            params.set("noLogo", "true")
            window.history.replaceState({}, "", `${window.location.pathname}?${params.toString()}`)
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
                            className="potion__wrapper"
                            animate={{ y: [0, -3, 0], rotate: [0, 3, -3, 0] }}
                            transition={{ repeat: Infinity, repeatType: "reverse", duration: 3, ease: "easeInOut" }}
                        >

                            <img src="/potion.svg" alt="Magic Potion" className="potion__flask" draggable="false" />
                            <div className="liquids__mask">
                                <motion.div
                                    className="liquid liquid--green"
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
                            className="loader__title"
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
                            className="logo__wrapper"
                            initial={{ scale: 0.6, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                        </motion.div>
                        <motion.div
                            className="potion__wrapper potion__wrapper--right"
                            animate={{ y: [0, -3, 0], rotate: [0, -3, 3, 0] }}
                            transition={{ repeat: Infinity, repeatType: "reverse", duration: 3, ease: "easeInOut" }}
                        >
                            <img src="/potion.svg" alt="Magic Potion" className="potion__flask" draggable="false" />

                            <div className="liquids__mask">
                                <motion.div
                                    className="liquid liquid--blue"
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

            <div className="scrollDownIndicator">

                <motion.div
                    className="scrollDownIndicator__mouse"
                    animate={{ y: [0, 10, 0], opacity: [1, 0.7, 1] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                    <div className="scrollDownIndicator__wheel" />

                </motion.div>

                <motion.div
                    className="scrollDownIndicator__arrow"
                    animate={{ y: [0, 10, 0], opacity: [1, 0.7, 1], rotate: [45] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                />
            </div>


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