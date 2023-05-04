import Link from "next/link";
import React from "react";

interface Project {
  id: number | undefined | null;
  attributes:
    | {
        name: string;
        description: string;
        spikes: any;
      }
    | undefined
    | null;
}

const Project = ({
  projects,
  projectId,
}: {
  projects: Project[];
  projectId: number;
}) => {
  // @ts-ignore
  const project: Project = Array.isArray(projects)
    ? projects.find((_project) => _project?.id === projectId)
    : ({} as Project);

  return (
    project &&
    Object.keys(project).length > 0 && (
      <div className="flex w-full justify-center">
        <a
          href=""
          className="block rounded-lg border border-gray-200 bg-white p-6 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <h2 className="ui-text-xl font-extrabold dark:text-white">
            {project?.attributes?.name}
          </h2>
          <p className="my-4 text-gray-500">
            {project?.attributes?.description}
          </p>
          <h3 className="text-2xl mb-2 font-semibold text-gray-900 dark:text-white">
            Spikes:
          </h3>
          <ul className="max-w-md list-inside list-none space-y-1 text-gray-500 dark:text-gray-400">
            {project?.attributes?.spikes?.data?.map(({ attributes, id }) => (
              <li key={id}>
                <Link
                  className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                  href={`spikes/${id}`}
                >
                  <span>{attributes?.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </a>
      </div>
    )
  );
};

export default Project;
