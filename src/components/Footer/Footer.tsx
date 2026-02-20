import { HeartFilledIcon } from "@radix-ui/react-icons";
import "./Footer.scss"
import { motion } from "framer-motion";
const Footer = () => {
    return (
        <footer className="footer">
            <p className="footer__text">Hecho por
                <motion.a
                    href="https://www.thedm.es"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer__link"
                    whileHover={{ scale: 1.05, color: "#ff6b81" }}
                    whileTap={{ scale: 0.55 }}

                >The DM </motion.a>con <HeartFilledIcon /></p>
        </footer>
    );
}

export default Footer;