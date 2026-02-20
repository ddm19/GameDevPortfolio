import ProjectPage, { type ProjectPageData } from "components/ProjectPage/ProjectPage"
import ratPageData from "./RAT.page.json"
import "./RAT.scss"

const RAT = () => {
    return <ProjectPage data={ratPageData as ProjectPageData} />
}

export default RAT
