import { motion } from 'framer-motion';
import SocialMediaIcons from '../sub/SocialMediaIcons';

const Hero = () => {
    return (
        <motion.div
            className="flex flex-col md:flex-row items-center justify-around h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black"
        >
            <div className="flex-1 flex flex-col md:ml-12 items-start justify-center p-4">
                <motion.h1
                    className="text-4xl md:text-6xl font-bold mb-3 md:ml-12 text-white"
                    initial={{ y: -100 }}
                    animate={{ y: 0 }}
                    transition={{ type: "spring", stiffness: 50, damping: 5 }}
                >
                    Hello, I&apos;m Belal
                </motion.h1>
                <motion.div
                    className="text-xl md:text-2xl text-white my-4 flex items-center"
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    transition={{ ease: "easeOut", duration: 1 }}
                >
                    <span>Software Developer</span>
                    <span className="mx-2">|</span>
                    <span>Tech Enthusiast</span>
                    <span className="mx-2">|</span>
                    <span>Problem Solver</span>
                </motion.div>
                <motion.div
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    transition={{ ease: "easeOut", duration: 1 }}>
                    <SocialMediaIcons />
                </motion.div>

            </div>

            <div className="flex-1 flex justify-center items-center p-4">
                <motion.img
                    src="/mainIconsdark.svg"
                    className="w-3/4 h-auto"
                    alt="main icon"
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    transition={{ ease: "easeOut", duration: 1 }}
                />
            </div>
        </motion.div>
    );
};

export default Hero;
