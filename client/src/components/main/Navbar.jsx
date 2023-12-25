import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaHome, FaUser, FaBriefcase, FaEnvelope, FaCode } from 'react-icons/fa';

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
        e.currentTarget.style.color = hover ? '#FFF' : 'gray';
        e.currentTarget.style.transform = hover ? 'scale(1.1)' : 'scale(1)';
    };

    return (
        <div className="fixed inset-x-0 bottom-0 z-10 bg-transparent py-2 px-4 flex justify-around items-center rounded-[38px] border border-gray-300/25 md:max-w-lg md:mx-auto m-7">
            <Link to="hero" smooth={true} duration={500} className="flex flex-col items-center"
                onMouseEnter={(e) => handleHover(e, true)}
                onMouseLeave={(e) => handleHover(e, false)}>
                <FaHome style={iconStyle} />
                <span className="text-xs">Home</span>
            </Link>
            <Link to="about" smooth={true} duration={500} className="flex flex-col items-center"
                onMouseEnter={(e) => handleHover(e, true)}
                onMouseLeave={(e) => handleHover(e, false)}>
                <FaUser style={iconStyle} />
                <span className="text-xs">About</span>
            </Link>
            <Link to="skills" smooth={true} duration={500} className="flex flex-col items-center"
                onMouseEnter={(e) => handleHover(e, true)}
                onMouseLeave={(e) => handleHover(e, false)}>
                <FaCode style={iconStyle} />
                <span className="text-xs">Skills</span>
            </Link>
            <Link to="projects" smooth={true} duration={500} className="flex flex-col items-center"
                onMouseEnter={(e) => handleHover(e, true)}
                onMouseLeave={(e) => handleHover(e, false)}>
                <FaBriefcase style={iconStyle} />
                <span className="text-xs">Projects</span>
            </Link>
            <Link to="contact" smooth={true} duration={500} className="flex flex-col items-center"
                onMouseEnter={(e) => handleHover(e, true)}
                onMouseLeave={(e) => handleHover(e, false)}>
                <FaEnvelope style={iconStyle} />
                <span className="text-xs">Contact</span>
            </Link>
        </div>
    );
};

export default Navbar;
