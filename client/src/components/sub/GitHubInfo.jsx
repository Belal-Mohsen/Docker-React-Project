import { useState, useEffect } from 'react';
import { TailSpin } from 'react-loader-spinner';
import axios from 'axios';
import { FaCodeBranch, FaStar, FaUsers } from 'react-icons/fa';
import { RiGitRepositoryCommitsFill } from "react-icons/ri";

const AnimatedNumber = ({ value }) => {
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setDisplayValue(prevValue => {
                if (prevValue < value) {
                    return prevValue + 1;
                }
                clearInterval(interval);
                return value;
            });
        }, 1);

        return () => clearInterval(interval);
    }, [value]);

    return <span>{displayValue}</span>;
};

function GitHubInfo() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('/api/commitCount')
            .then(response => {
                setData(response.data);
                console.log(response)
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <div className='flex mt-10 ml-10'><TailSpin color="#00BFFF" height={80} width={80} /></div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className='flex mt-9 md:pl-14 text-white gap-12 '>
            <div>
                <FaCodeBranch size={60} />
                <p className='text-[30px] font-bold mt-4'> <AnimatedNumber value={data ? data.totalRepos : 0} /></p>
            </div>
            <div>
                <RiGitRepositoryCommitsFill size={60} />
                <p className='text-[30px] font-bold mt-4'><AnimatedNumber value={data ? data.totalCommits : 0} /></p>
            </div>
            <div>
                <FaUsers size={60} />
                <p className='text-[30px] font-bold mt-4'><AnimatedNumber value={data ? data.collaborators : 0} /></p>
            </div>
        </div>
    );
}

export default GitHubInfo;
