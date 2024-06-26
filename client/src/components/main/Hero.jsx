import { useEffect } from 'react';
import { motion } from 'framer-motion';
import SocialMediaIcons from '../sub/SocialMediaIcons';
import axios from 'axios';

const Hero = () => {


    useEffect(() => {
        // just for testing
        axios.get('/api/test')
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error("Error fetching data: ", error);
            });
    }, []);


    return (
        <motion.div
            className="flex flex-col md:flex-row gap-6 md:h-screen w-full overflow-hidden bg-[#080712] scale-100 pb-6"
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
                    className="text-xl md:text-2xl text-white my-4 flex items-center mb-8 text-justify"
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    transition={{ ease: "easeOut", duration: 1 }}
                >
                    Software Developer and AI Researcher from Montreal.
                    With expertise in machine learning, deep learning, and software development,
                    I have contributed to both industry and academia.
                    My passion for technology is driven
                    by a constant pursuit of innovation and
                    excellence in the ever-evolving world of computing.
                </motion.div>
                <motion.div
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    transition={{ ease: "easeOut", duration: 1 }}>
                    <SocialMediaIcons />
                </motion.div>

            </div>

            <div className="hidden flex-1 md:flex justify-center items-center p-4">
                <motion.img
                    src="/mainIconsdark.svg"
                    className="w-3/4 h-auto"
                    alt="main icon"
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    transition={{ ease: "easeOut", duration: 1 }}
                />
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
                        src="/bg3-s.mp4"
                    />
                </div>
            </div>

        </motion.div>
    );
};

export default Hero;
