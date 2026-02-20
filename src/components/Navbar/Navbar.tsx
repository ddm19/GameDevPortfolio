import { motion } from "framer-motion"
import LoaderBrand from "components/Loader/LoaderBrand"
import "./Navbar.scss"

const Navbar = () => {
    return (
        <nav className="navbar">
            <motion.div
                className="navbar__brand"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 3.5 }}
            >
                <LoaderBrand mode="inline" showBook={false} />
            </motion.div>

        </nav>
    )
}

export default Navbar
