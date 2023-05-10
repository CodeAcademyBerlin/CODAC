"use client";
import { useGetProjectsQuery } from "codac-server-graphql";
import { useState } from "react";

import Project from "../../components/Project";
import Sidebar from "../../components/Sidebar";

export default function Page() {
  const { data, loading, error } = useGetProjectsQuery();
  const [projectId, setProjectId] = useState(null);
  const projects = data?.projects?.data ?? [];
  const projectItems = projects.map((project) => ({
    name: project.attributes?.name ?? "",
    id: project.id ?? "",
  }));

  const project = projects.find((project) => project.id === projectId);

  return (
    <div className="container">
      <div className="flex justify-between">
        <nav className="h-screen w-64 bg-gray-200 py-16 pt-6 shadow">
          {projectItems && <Sidebar onClick={setProjectId} links={projectItems} />}
        </nav>
        <main className="h-screen w-screen pl-[74px] pt-8">
          {project?.attributes && <Project project={project.attributes} />}
        </main>
      </div>
    </div>
  );
}
