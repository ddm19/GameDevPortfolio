import Section from "components/Section/Section"

const About = () => {
    return (
        <Section id="about">
            <h2 className="section__title">Mi proceso</h2>
            <div className="about__content">
                <p>
                    Diseño iterativo basado en prototipado rápido, testing constante y análisis de métricas.
                </p>
                <p>
                    Me centro en crear sistemas coherentes, claros y escalables que generen experiencias memorables.
                </p>
            </div>
        </Section>
    )
}

export default About
