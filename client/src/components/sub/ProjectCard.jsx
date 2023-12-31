import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const ProjectCard = ({ image, title, description, tools }) => {
    return (
        <div className="relative w-full md:w-1/4">
            <motion.div
                className="w-full h-[700px] rounded-[30px] bg-slate-700/50 overflow-hidden hover:shadow-2xl"
                whileHover={{ scale: 1.05 }}
            >
                <img className="h-60 w-full rounded-[30px]" src={image} alt={title} />
                <div className="px-6 py-4">
                    <div className="text-white font-bold text-xl mb-2">{title}</div>
                    <p className="text-white text-base">
                        {description}
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    {tools.map(tool => (
                        <span key={tool} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tool}</span>
                    ))}
                </div>
            </motion.div>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="absolute bottom-0 right-0 p-4">
                <FaGithub size={30} style={{ color: 'white' }} />
            </a>
        </div>
    );
};

export default ProjectCard;



