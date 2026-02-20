import Section from "components/Section/Section"
import ProjectCard from "components/ProjectCard/ProjectCard"
import "./Projects.scss"
import { useNavigate } from "react-router-dom"

const Projects = () => {
    const navigate = useNavigate()

    const navigateToProject = (projectId: string) => {
        navigate(`/project/${projectId}`)
    }
    return (
        <Section id="projects">
            <h2 className="section__title">Proyectos</h2>
            <div className="projects__grid">
                <ProjectCard
                    title="RAT (Shooter Táctico)"
                    description="Diseño de mecánicas y niveles para un tactical shooter, junto con un prototipo."
                    tags={["Gameplay Design", "Level Design", "Prototype"]}
                    images={["/RAT1.gif", "/RAT2.gif", "/RAT3.gif"]}
                    onClick={() => navigateToProject("RAT")}
                />

            </div>
        </Section>
    )
}

export default Projects
