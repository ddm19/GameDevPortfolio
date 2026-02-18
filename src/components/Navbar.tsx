import { motion } from "framer-motion"

const Navbar = () => {
    return (
        <nav className="navbar">
            <motion.div
                className="navbar-logo"
                layoutId="potionLogo"
            >
                <div className="potion small">
                    <div className="liquid" />
                </div>
            </motion.div>
            <div className="nav-links">
                <a href="#projects">Proyectos</a>
                <a href="#about">Proceso</a>
                <a href="#contact">Contacto</a>
            </div>
        </nav>
    )
}

export default Navbar
