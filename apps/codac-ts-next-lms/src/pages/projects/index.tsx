'use client';
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Project from './components/Project'
import {useGetProjectsQuery} from "codac-administration";
import {useState} from "react";


export default function Page() {
    const PAGE_TITLE = "Projects";

    const {data, loading, error} = useGetProjectsQuery();
    const [projectId, setProjectId] = useState(null);
    const projects = data?.projects?.data?? [];
    const projectItems = projects?.map((project) => ({
        name: project?.attributes?.name, id: project?.id
    }))

    console.log("data",data);

    return (
        <div className="container">
            <Header title={PAGE_TITLE}/>
            <div className="flex justify-between">
                <nav className="w-64 pt-6 py-16 h-screen bg-gray-200 shadow">
                    <Sidebar onClick={setProjectId} links={projectItems}/>
                </nav>
                <main className="h-screen w-screen pt-8 pl-[74px]">
                    <Project projects={projects} projectId={projectId}/>
                </main>
            </div>
        </div>
    )
}