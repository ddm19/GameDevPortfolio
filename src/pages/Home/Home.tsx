import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Contact from "components/Contact/Contact"
import Hero from "components/Hero/Hero"
import Navbar from "components/Navbar/Navbar"
import Projects from "components/Projects/Projects"
import "./Home.scss"
import About from "components/About/About"
import LoaderBrand from "components/Loader/LoaderBrand"
import Footer from "components/Footer/Footer"

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
                    <LoaderBrand />
                )}
            </AnimatePresence>


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
                    animate={{ y: [0, 10, 0], opacity: [1, 0.7, 1], rotate: [-45] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                />
            </div>


            {!loading && (
                <>
                    <Hero />
                    <Projects />
                    <About />
                    <Contact />
                    <Footer />
                </>
            )}
        </div>
    )
}

export default Home
