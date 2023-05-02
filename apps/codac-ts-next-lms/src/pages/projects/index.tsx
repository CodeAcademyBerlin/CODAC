'use client';
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Project from './components/Project'
import {useGetProjectsQuery} from "codac-administration";
import {useState} from "react";


export default function Page() {
    const PAGE_TITLE = "Projects";

    const {data, loading, error} = useGetProjectsQuery();
    const [projectId, setProjectId] = useState(0);
    const projects = data?.projects?.data;
    const projectItems = projects?.map((project, idx) => ({
        name: project?.attributes?.name, id: idx
    }))

    console.log(data);
    console.log(projects);

    return (
        <div className="container">
            <Header title={PAGE_TITLE}/>
            <div className="flex">
                <nav className="w-64 pt-6 py-16 h-screen bg-gray-200 shadow">
                    {/* Sidebar contents */}
                    <Sidebar onClick={setProjectId} links={projectItems}/>
                </nav>
                <main className="ml-64 w-full pt-6 pb-10">
                    {/* Main content */}
                    <Project projects={projects} projectId={projectId}/>
                </main>
            </div>
        </div>
    )
}