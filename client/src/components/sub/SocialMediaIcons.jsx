
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

const SocialMediaIcons = () => {
    const iconStyle = "w-6 h-6";
    const linkStyle = "flex items-center justify-center w-12 h-12 bg-white text-black rounded-full transition duration-300 z-20";

    const handleHover = (e, hover) => {
        if (hover) {
            e.currentTarget.className = `${linkStyle} bg-gray-200 scale-150`;
        } else {
            e.currentTarget.className = linkStyle;
        }
    };

    return (
        <div className="flex w-full gap-1 space-x-4 md:ml-48">
            <a
                href="https://www.linkedin.com/in/belal4mohsen/"
                target="_blank" rel="noopener noreferrer"
                className={linkStyle}
                onMouseEnter={(e) => handleHover(e, true)}
                onMouseLeave={(e) => handleHover(e, false)}
            >
                <FaLinkedin className={iconStyle} />
            </a>
            <a
                href="https://twitter.com/Belal4Mo"
                target="_blank" rel="noopener noreferrer"
                className={linkStyle}
                onMouseEnter={(e) => handleHover(e, true)}
                onMouseLeave={(e) => handleHover(e, false)}
            >
                <FaTwitter className={iconStyle} />
            </a>
            <a
                href="https://github.com/Belal-Mohsen"
                target="_blank" rel="noopener noreferrer"
                className={linkStyle}
                onMouseEnter={(e) => handleHover(e, true)}
                onMouseLeave={(e) => handleHover(e, false)}
            >
                <FaGithub className={iconStyle} />
            </a>
        </div>
    );
};

export default SocialMediaIcons;
