import Section from "components/Section/Section"
import { motion } from "framer-motion"
import "./Contact.scss"

const Contact = () => {
    return (
        <Section id="contact">
            <h2 className="section__title">Contacto</h2>
            <motion.a
                href="mailto:youremail@email.com"
                className="cta cta--secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
            >
                Hablemos
            </motion.a>
        </Section>
    )
}

export default Contact
