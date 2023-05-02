interface Project {
    attributes: {
        description: string
    };
}


const Project = ({ projects, projectId } : {projects: Project[], projectId: number}) => {
    const project = projects[projectId];
    return (
        <main className="bg-white py-4 px-4">
            <h1 className="mb-4 text-xl font-bold">Projects</h1>
            <p key={project.attributes?.description} >
                {project.attributes?.description}
            </p>
    </main>
  );
};

export default Project;
