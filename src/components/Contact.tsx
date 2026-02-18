import Section from "./Section"
import { motion } from "framer-motion"

const Contact = () => {
    return (
        <Section id="contact">
            <h2 className="section-title">Contacto</h2>
            <motion.a
                href="mailto:youremail@email.com"
                className="cta secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
            >
                Hablemos
            </motion.a>
        </Section>
    )
}

export default Contact
