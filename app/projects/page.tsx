import Project from '../../components/project';
import { projects } from '../../projectsObj';

const ProjectPage = () => {
	const mappedProjects = projects.map((project) => {
		return (
			<Project
				key={project.id}
				image={project.image}
				title={project.title}
				description={project.description}
				links={project.links}
				tech={project.tech}
			/>
		);
	});

	return <section className="flex-center">{mappedProjects}</section>;
};

export default ProjectPage;
