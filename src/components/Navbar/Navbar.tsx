import { motion } from "framer-motion"
import "./Navbar.scss"

const Navbar = () => {
    return (
        <nav className="navbar">
            <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 3.5 }}
            >
                NAVBAR
            </motion.div>

        </nav>
    )
}

export default Navbar
