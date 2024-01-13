import { useState, useEffect } from 'react';
import axios from 'axios';
import Timeline from '../sub/Timeline';
import { Box, Tab, Tabs } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';

const About = () => {
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const educationData = [
        {
            title: 'ACS Degree',
            specialty: 'Software Development',
            institution: 'Vanier College, Montreal',
            date: 'Year of Completion',
            icon: '💻'
        },
        {
            title: "Master's Degree",
            specialty: 'Computer Engineering',
            institution: 'JUST, Jordan',
            date: 'Year of Completion',
            icon: '🏛️'
        },
        {
            title: 'Bachelor Degree',
            specialty: 'Computer Engineering',
            institution: 'Aleppo University, Syria',
            date: 'Year of Completion',
            icon: '🎓'
        },
    ];


    return (
        <div className="flex flex-col md:flex-row md:h-screen w-full overflow-hidden bg-[#080712] scale-100 pb-6">
            <div className="m-10 md:w-1/4">
                <img src="/mainIconsdark.svg" alt="Belal" className="w-full h-auto object-cover" />
            </div>
            <div className="md:w-1/2 m-4 md:mt-20">
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="About Me Tabs">
                            <Tab label="Who Am I" value="1" sx={{ color: 'white', '&.Mui-selected': { color: 'white' } }} />
                            <Tab label="Education" value="2" sx={{ color: 'white', '&.Mui-selected': { color: 'white' } }} />
                            <Tab label="Blog" value="3" sx={{ color: 'white', '&.Mui-selected': { color: 'white' } }} />
                        </TabList>
                    </Box>

                    <TabPanel value="1">
                        <div className='text-white text-justify md:text-lg'>
                            Belal is a motivated and detail-oriented software developer,
                            passionate about solving complex problems through coding. With a keen interest in dynamic
                            development projects, he seeks to enhance his experience in software development.
                            Belal&apos;s technical skills span various programming languages like Python, Java,
                            JavaScript, and familiarity with Golang, C#, and C++. He&apos;s skilled in web development,
                            database management,AI, machine learning, and cloud services. His professional experiences
                            include roles as a software developer, data engineer, and research assistant, where he has
                            demonstrated proficiency in troubleshooting, application optimization, and deploying deep
                            learning models. Additionally, Belal has a strong educational background
                            with a Master&apos;s in Computer Engineering and a high GPA, complemented by several honors
                            and awards.
                        </div>
                    </TabPanel>

                    <TabPanel value="2">
                        <div className='text-white'>
                            <Timeline data={educationData} />
                        </div>
                    </TabPanel>
                    <TabPanel value="3">
                        <div className='text-white'>
                            {/* {tweets.map(tweet => (
                                <div key={tweet.id}>
                                    <p>{tweet.text}</p>
                                </div>
                            ))} */}
                        </div>
                    </TabPanel>
                </TabContext>
            </div>
        </div>
    );
};

export default About