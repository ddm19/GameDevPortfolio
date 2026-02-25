import ProjectPage, { type ProjectPageData } from "components/ProjectPage/ProjectPage"
import ROHPageData from "./ROH.page.json"


const ROH = () => {
    return <ProjectPage data={ROHPageData as ProjectPageData} />
}

export default ROH