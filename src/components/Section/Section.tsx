import "./Section.scss"
import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface SectionProps {
    id?: string
    children: ReactNode
}

const Section = ({ id, children }: SectionProps) => {
    return (
        <motion.section
            id={id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="section"
        >
            {children}
        </motion.section>
    )
}

export default Section
