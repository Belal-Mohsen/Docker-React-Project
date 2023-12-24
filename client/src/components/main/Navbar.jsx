
import { FaHome, FaUser, FaBriefcase, FaEnvelope, FaCode } from 'react-icons/fa';

const Navbar = () => {
    const iconStyle = {
        fontSize: '35px',
        transition: 'color 0.5s, transform 0.3s'
    };

    const handleHover = (e, hover) => {
        e.currentTarget.style.color = hover ? '#FFF' : 'gray';
        e.currentTarget.style.transform = hover ? 'scale(1.1)' : 'scale(1)';
    };

    return (
        <div className="fixed inset-x-0 bottom-4 md:bottom-8 bg-transparent py-2 px-4 flex justify-around items-center rounded-[38px] border border-gray-300/25 border max-w-md mx-auto">
            <a href="#home" className="flex flex-col items-center"
                onMouseEnter={(e) => handleHover(e, true)}
                onMouseLeave={(e) => handleHover(e, false)}>
                <FaHome style={iconStyle} />
                <span className="text-xs">Home</span>
            </a>
            <a href="#about" className="flex flex-col items-center"
                onMouseEnter={(e) => handleHover(e, true)}
                onMouseLeave={(e) => handleHover(e, false)}>
                <FaUser style={iconStyle} />
                <span className="text-xs">About</span>
            </a>
            <a href="#skills" className="flex flex-col items-center"
                onMouseEnter={(e) => handleHover(e, true)}
                onMouseLeave={(e) => handleHover(e, false)}>
                <FaCode style={iconStyle} />
                <span className="text-xs">Skills</span>
            </a>
            <a href="#projects" className="flex flex-col items-center"
                onMouseEnter={(e) => handleHover(e, true)}
                onMouseLeave={(e) => handleHover(e, false)}>
                <FaBriefcase style={iconStyle} />
                <span className="text-xs">Projects</span>
            </a>
            <a href="#contact" className="flex flex-col items-center"
                onMouseEnter={(e) => handleHover(e, true)}
                onMouseLeave={(e) => handleHover(e, false)}>
                <FaEnvelope style={iconStyle} />
                <span className="text-xs">Contact</span>
            </a>
        </div>
    );
};

export default Navbar;

