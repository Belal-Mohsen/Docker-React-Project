import { useState } from 'react';
import { Box, Tab, Tabs } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';

const About = () => {
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

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
                        <div className='text-white'>
                            Your engaging bio goes here.
                        </div>
                    </TabPanel>

                    <TabPanel value="2">
                        <div className='text-white'>
                            Educational milestones and icons/graphics.
                        </div>
                    </TabPanel>
                    <TabPanel value="3">
                        <div className='text-white'>
                            Your latest tweet or static content.
                        </div>
                    </TabPanel>
                </TabContext>
            </div>
        </div>
    );
};

export default About