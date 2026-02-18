import Section from "./Section"
import ProjectCard from "./ProjectCard"

const Projects = () => {
    return (
        <Section id="projects">
            <h2 className="section-title">Proyectos</h2>
            <div className="projects-grid">
                <ProjectCard
                    title="Combat System Prototype"
                    description="Diseño y balanceo de sistema de combate modular con iteraciones basadas en testing."
                    tags={["Systems Design", "Balancing", "Prototype"]}
                />
                <ProjectCard
                    title="Narrative RPG Concept"
                    description="Arquitectura narrativa ramificada centrada en decisiones emergentes."
                    tags={["Narrative", "Worldbuilding", "UX"]}
                />
                <ProjectCard
                    title="Multiplayer Loop Design"
                    description="Diseño de core loop competitivo con enfoque en retención y progresión."
                    tags={["Game Loop", "Retention", "Multiplayer"]}
                />
            </div>
        </Section>
    )
}

export default Projects
