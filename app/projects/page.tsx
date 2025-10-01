import { useState } from 'react';
import Project from '../../components/project';
import { projects } from '../../projectsObj';

const ProjectPage = () => {
	const activeProjects = projects.filter((proj) => proj.active);
	const inactiveProjects = projects.filter((proj) => !proj.active);

	return (
		<section>
			<div className="margin">
				<h2>Actively Developing</h2>
				<hr />
			</div>
			{activeProjects.map((proj) => (
				<Project key={proj.id} {...proj} />
			))}

			<div className="margin">
				<h2>Inactive or Completed Projects</h2>
				<hr />
			</div>
			{inactiveProjects.map((proj) => (
				<Project key={proj.id} {...proj} />
			))}
		</section>
	);
};

export default ProjectPage;
