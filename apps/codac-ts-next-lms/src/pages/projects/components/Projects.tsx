import { useGetProjectsQuery } from "codac-administration";

const Projects = () => {
  const { data, loading, error } = useGetProjectsQuery();
  const projects = data?.projects?.data;
  console.log(data);

  return (
    <main className="bg-white py-4 px-4">
      <h1 className="mb-4 text-xl font-bold">Projects</h1>
      {projects &&
        projects?.map((project) => (
            <p key={project.attributes?.description} >
                {project.attributes?.description}
            </p>
        ))}
        <p className="pt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed risus
            vel risus placerat iaculis nec at justo. Nullam ac mauris nulla.
            Maecenas vitae nibh vel turpis convallis iaculis vel in metus. Nulla
            sollicitudin orci lectus, eu rhoncus elit venenatis ac. In interdum,
            massa ac tristique tempus, velit est tincidunt ipsum, id consequat neque
            justo non magna.
        </p>
        <p>
            Nam vitae tincidunt risus. Praesent malesuada sagittis mauris a
            sollicitudin. Nullam vestibulum purus sit amet eros gravida, eu eleifend
            tellus malesuada. Aenean non nibh urna. Maecenas vel magna malesuada,
            tristique est nec, luctus lectus. Sed euismod vestibulum tortor a
            cursus. Nullam molestie metus eu dapibus laoreet.
        </p>
    </main>
  );
};

export default Projects;
