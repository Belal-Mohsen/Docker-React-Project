import express from 'express';
import axios from 'axios';
import * as dotenv from 'dotenv';

dotenv.config();

const apiRouter = express.Router();

apiRouter.get('/commitCount', async (req, res) => {
    const username = 'Belal-Mohsen';
    const token = process.env.API_TOKEN;

    try {
        const userResponse = await axios.get(`https://api.github.com/users/${username}`, {
            headers: { 'Authorization': `token ${token}` }
        });
        const followers = userResponse.data.followers;

        const reposResponse = await axios.get(`https://api.github.com/users/${username}/repos`, {
            headers: { 'Authorization': `token ${token}` }
        });
        const repos = reposResponse.data;

        let totalCommits = 0;
        let totalStars = 0;
        let totalForks = 0;

        for (const repo of repos) {
            const commitsResponse = await axios.get(`https://api.github.com/repos/${username}/${repo.name}/commits`, {
                headers: { 'Authorization': `token ${token}` }
            });
            totalCommits += commitsResponse.data.length;
            totalStars += repo.stargazers_count;
            totalForks += repo.forks_count;
        }

        const totalRepos = userResponse.data.public_repos + userResponse.data.total_private_repos;
        const collaborators = userResponse.data.collaborators;

        res.status(200).json({
            totalRepos,
            totalCommits,
            collaborators
        });
    } catch (error) {
        console.error('Error fetching GitHub data:', error);
        res.status(500).json({ message: 'Error fetching GitHub data' });
    }
});

export default apiRouter;