import ProjectPage, { type ProjectPageData } from "components/ProjectPage/ProjectPage"
import systemsTTRPGPageData from "./SystemsTTRPG.page.json"

const SystemsTTRPG = () => {
    return <ProjectPage data={systemsTTRPGPageData as ProjectPageData} />
}

export default SystemsTTRPG
