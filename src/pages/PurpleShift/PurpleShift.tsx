import ProjectPage, { type ProjectPageData } from "components/ProjectPage/ProjectPage"
import purpleshiftPageData from "./PurpleShift.page.json"

const PurpleShift = () => {
    return <ProjectPage data={purpleshiftPageData as ProjectPageData} />
}

export default PurpleShift