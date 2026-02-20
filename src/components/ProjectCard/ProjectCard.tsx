import { motion } from "framer-motion"
import Autoplay from "embla-carousel-autoplay"
import useEmblaCarousel from "embla-carousel-react"
import { useRef } from "react"
import "./ProjectCard.scss"

interface ProjectCardProps {
    title: string
    images?: string[]
    description: string
    tags: string[]
    onClick?: () => void
}

const ProjectCard = ({ title, images, description, tags, onClick }: ProjectCardProps) => {
    const autoplay = useRef(
        Autoplay({
            delay: 4500,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
        })
    )
    const [emblaRef] = useEmblaCarousel({ loop: true }, [autoplay.current])

    return (
        <motion.div
            className="project__card"
            whileHover={{ scale: 1.03, y: -6 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            onClick={onClick}
        >
            {images?.length ? (
                <div className="project__carousel">
                    <div className="embla__viewport" ref={emblaRef}>
                        <div className="embla__container">
                            {images.map((image, index) => (
                                <div className="embla__slide" key={`${title}-${index}`}>
                                    <img src={image} alt={`${title} screenshot ${index + 1}`} loading="lazy" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ) : null}

            <div className="project__cardContent">
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="project__tags">
                    {tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

export default ProjectCard
