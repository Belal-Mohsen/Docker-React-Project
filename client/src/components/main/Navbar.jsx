import { FaHome, FaUser, FaBriefcase, FaEnvelope, FaCode } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const iconStyle = {
        fontSize: isMobile ? '20px' : '45px',
        transition: 'color 0.5s, transform 0.3s',
        color: 'gray'
    };

    const handleHover = (e, hover) => {
        e.currentTarget.style.color = hover ? '#FFF' : 'gray'; // Change color of icon and text
        e.currentTarget.style.transform = hover ? 'scale(1.1)' : 'scale(1)';
    };

    return (
        <div className="fixed inset-x-0 bottom-0 z-10 bg-transparent py-2 px-4 flex justify-around items-center rounded-[38px] border border-gray-300/25 md:max-w-lg md:mx-auto m-7">
            <a href="#home" className="flex flex-col items-center"
                onMouseEnter={(e) => handleHover(e, true)}
                onMouseLeave={(e) => handleHover(e, false)}
                style={{ color: 'gray' }}>
                <FaHome style={iconStyle} />
                <span className="text-xs">Home</span>
            </a>
            <a href="#about" className="flex flex-col items-center"
                onMouseEnter={(e) => handleHover(e, true)}
                onMouseLeave={(e) => handleHover(e, false)}
                style={{ color: 'gray' }}>
                <FaUser style={iconStyle} />
                <span className="text-xs">About</span>
            </a>
            <a href="#skills" className="flex flex-col items-center"
                onMouseEnter={(e) => handleHover(e, true)}
                onMouseLeave={(e) => handleHover(e, false)}
                style={{ color: 'gray' }}>
                <FaCode style={iconStyle} />
                <span className="text-xs">Skills</span>
            </a>
            <a href="#projects" className="flex flex-col items-center"
                onMouseEnter={(e) => handleHover(e, true)}
                onMouseLeave={(e) => handleHover(e, false)}
                style={{ color: 'gray' }}>
                <FaBriefcase style={iconStyle} />
                <span className="text-xs">Projects</span>
            </a>
            <a href="#contact" className="flex flex-col items-center"
                onMouseEnter={(e) => handleHover(e, true)}
                onMouseLeave={(e) => handleHover(e, false)}
                style={{ color: 'gray' }}>
                <FaEnvelope style={iconStyle} />
                <span className="text-xs">Contact</span>
            </a>
        </div>
    );
};

export default Navbar;
