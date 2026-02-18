import { motion } from "framer-motion"

interface ProjectCardProps {
    title: string
    description: string
    tags: string[]
}

const ProjectCard = ({ title, description, tags }: ProjectCardProps) => {
    return (
        <motion.div
            className="project-card"
            whileHover={{ scale: 1.03, y: -6 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
        >
            <div className="card-content">
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="tags">
                    {tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

export default ProjectCard
