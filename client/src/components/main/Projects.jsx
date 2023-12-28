import ProjectCard from '../sub/ProjectCard';
import projects from '../../utils/ProjectsData';

const Projects = () => {
    return (
        <div className="flex flex-col md:h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black pb-6">
            <div className='md:text-[40px] text-white font-medium text-center mb-[65px] mt-16 text-lg'>
                My Recent Projects
            </div>
            <div className='flex flex-wrap flex-col md:flex-row gap-7 justify-center mx-7 md:mx-0 md:mt-40'>
                {projects.map(project => (
                    <ProjectCard
                        key={project.id}
                        image={project.image}
                        title={project.title}
                        description={project.description}
                        tools={project.tools}
                    />
                ))}

            </div>

        </div>
    );
}

export default Projects;