import { Project } from "codac-graphql-types";
import Link from "next/link";
import React from "react";

const Project = ({ project }: { project: Project }) => {
  return (
    <div className="flex w-full justify-center">
      <a
        href=""
        className="block rounded-lg border border-gray-200 bg-white p-6 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <h2 className="ui-text-xl font-extrabold dark:text-white">{project.name}</h2>
        <p className="my-4 text-gray-500">{project.description}</p>
        <h3 className="mb-2 text-2xl font-semibold text-gray-900 dark:text-white">Spikes:</h3>
        <ul className="max-w-md list-inside list-none space-y-1 text-gray-500 dark:text-gray-400">
          {/* {project.spikes?.data.map((spike) => (
            <li key={spike.id}>
              <Link
                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                href={`spikes/${spike.id}`}
              >
                <span>{spike.attributes.title}</span>
              </Link>
            </li>
          ))} */}
        </ul>
      </a>
    </div>
  );
};

export default Project;
