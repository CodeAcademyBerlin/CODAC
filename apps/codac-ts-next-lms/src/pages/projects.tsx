import { useGetProjectsQuery } from "codac-administration";

export default function Projects() {
     const { data, loading, error } = useGetProjectsQuery();
     const projects = data?.projects?.data
     console.log(data)
    return (
        <div>
            {projects && projects.map(project  => {
                return <div>
                    <p>{project.attributes?.description}</p>
                </div>
            }) }
            <p>Test</p>
        </div>
    )
} 