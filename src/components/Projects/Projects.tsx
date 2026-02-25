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
                    images={["/projects/rat/RAT1.gif", "/projects/rat/RAT2.gif", "/projects/rat/RAT3.gif"]}
                    onClick={() => navigateToProject("RAT")}
                />
                <ProjectCard
                    title="Purple Shift (Juego de Puzzles)"
                    description="Diseño y desarrollo de un juego de puzzles en Unity, con énfasis en mecánicas laberínticas."
                    tags={["Game Design", "Narrative Design", "Puzzle Mechanics", "Level Design", "Prototype", "Game Development"]}
                    images={["/projects/purpleshift/purpleShift.png", "/projects/purpleshift/PurpleShift1.gif"]}
                    onClick={() => navigateToProject("PurpleShift")}
                    delay={6000}
                />
                <ProjectCard
                    title="D&D 5e: Expansión de Sistemas"
                    description="Diseño de un sistema de crafting (Herbología y Alquimia) y subsistemas para D&D 5e. Foco en balance matemático, riesgo/recompensa y economía de juego."
                    tags={["Systems Design", "Economy & Balance", "Tabletop RPG", "Math & Spreadsheets", "Game Design", "Playtesting"]}
                    images={["/projects/ttrpg/alchemy.png", "/projects/ttrpg/floralias.png", "/projects/ttrpg/ranidos.png"]}
                    onClick={() => navigateToProject("SystemsTTRPG")}
                    delay={6200}
                />

            </div>
        </Section>
    )
}

export default Projects
