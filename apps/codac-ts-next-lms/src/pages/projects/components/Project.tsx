import Link from "next/link";
import React from "react";

interface Project {
    id: number | undefined | null
    attributes: {
        name: string
        description: string
        spikes: any
    } | undefined | null;
}


const Project = ({projects, projectId}: { projects: Project[], projectId: number }) => {
    // @ts-ignore
    const project: Project = Array.isArray(projects) ?
        projects.find((_project) => (_project?.id === projectId)) : {} as Project

    return project && Object.keys(project).length > 0 && (
        <div className="flex justify-center w-full">
            <a
                href="#"
                className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
                <h2 className="ui-text-xl font-extrabold dark:text-white">
                    {project?.attributes?.name}
                </h2>
                <p className="my-4 text-gray-500">
                    {project?.attributes?.description}
                </p>
                <h3 className="mb-2 text-2xl font-semibold text-gray-900 dark:text-white">Spikes:</h3>
                <ul className="max-w-md space-y-1 text-gray-500 list-none list-inside dark:text-gray-400">
                    {project?.attributes?.spikes?.data?.map(({attributes, id}) => (
                        <li key={id} >
                            <Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline" href={`spikes/${id}`}>
                                <span>{attributes?.title}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </a>
        </div>
    );
};

export default Project;
