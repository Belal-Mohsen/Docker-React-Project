import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SkillsIcons from '../../utils/skillsIcons';

const Skills = () => {
    const [ref, inView] = useInView({
        // triggerOnce: true,
        threshold: 0.2 // Adjust as needed
    });

    const variants = {
        hidden: (index) => ({
            opacity: 0,
            x: -50 - index * 30,
            y: -50 - index * 30
        }),
        visible: (index) => ({
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                delay: index * 0.1
            }
        })
    };

    return (
        <div ref={ref} className="flex flex-wrap h-screen mx-15 gap-4 p-4 bg-gradient-to-br from-gray-800 via-gray-900 to-black">
            {SkillsIcons.map((skill, index) => (
                <motion.div
                    key={skill.id}
                    custom={index}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={variants}
                >
                    <img src={skill.icon} alt={skill.name} className="h-12 w-12 mb-2" />
                </motion.div>
            ))}
        </div>
    );
};

export default Skills;
