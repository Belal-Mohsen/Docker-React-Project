import ProjectCard from '../sub/ProjectCard';
import projects from '../../utils/ProjectsData';

const Projects = () => {
    return (
        <div className="flex flex-col gap-6 md:h-screen w-full overflow-hidden bg-[#080712] scale-100 pb-6">
            <div className='md:text-[40px] text-white font-medium text-center mb-[65px] mt-16 text-lg'>
                My Recent Projects
            </div>
            <div className='flex flex-wrap flex-col md:flex-row gap-7 justify-center mx-7 md:mx-0 md:mt-30 z-[10]'>
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
            <div className='flex justify-end mr-7 md:mr-48 z-20'>
                <a href="https://github.com/Belal-Mohsen" target="_blank" rel="noopener noreferrer">
                    <button className='border border-slate-600 text-white rounded-3xl px-8 py-2 shadow hover:shadow-2xl hover:scale-105 transition duration-300 ease-in-out'>
                        More..
                    </button>
                </a>
            </div>

            <div className="w-full h-full absolute">
                <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
                    <video
                        className="w-full h-auto"
                        preload="false"
                        playsInline
                        loop
                        muted
                        autoPlay
                        src="/bg3.mp4"
                    />
                </div>
            </div>

        </div>
    );
}

export default Projects;