import { motion } from "framer-motion"
import LoaderBrand from "components/Loader/LoaderBrand"
import "./Navbar.scss"
import { useNavigate, useLocation } from "react-router-dom"
import { useEffect } from "react"

const Navbar = () => {
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        if (location.hash) {
            const el = document.querySelector(location.hash)
            if (el) {
                setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 50)
            }
        }
    }, [location])

    const handleBrandClick = () => {
        navigate("/?noLogo=true")
    }


    const linkVariants = {
        hidden: { opacity: 0, y: -15 },
        visible: { opacity: 1, y: 0 }
    }

    return (
        <motion.nav
            className="navbar"
            initial="hidden"
            animate="visible"
        >
            <motion.div
                className="navbar__brand"
                whileHover={{ scale: 1.08, rotate: -1 }}
                whileTap={{ scale: 0.94 }}
                onClick={handleBrandClick}
            >
                <img src="/shared/brand/logoNav.svg" alt="Logo" className="navbar__logo" />
                <LoaderBrand showBook={false} mode="inline" showPotions={false} />
            </motion.div>

            <motion.div className="navbar__linkContainer">
                <motion.a
                    className="navbar__link"
                    variants={linkVariants}
                    whileHover={{ scale: 1.08, y: -3, color: "var(--accent)" }}
                    whileTap={{ scale: 0.9 }}
                    href="/?noLogo=true"
                >
                    Inicio
                </motion.a>

                <motion.a
                    className="navbar__link"
                    variants={linkVariants}
                    whileHover={{ scale: 1.08, y: -3, color: "var(--accent)" }}
                    whileTap={{ scale: 0.9 }}
                    href="/?noLogo=true#projects"
                >
                    Proyectos
                </motion.a>

                <motion.a
                    className="navbar__link"
                    variants={linkVariants}
                    whileHover={{ scale: 1.08, y: -3, color: "var(--accent)" }}
                    whileTap={{ scale: 0.9 }}
                    href="/?noLogo=true#contact"
                >
                    Contacto
                </motion.a>
            </motion.div>
        </motion.nav>
    )
}

export default Navbar