import fetch from 'node-fetch';
import dotenv from "dotenv";

dotenv.config();

const api = async (req, res) => {
    const myHeaders = new Headers();
    myHeaders.append("apikey", process.env.NEWS_API);

    const requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
    };
    const num = req.query.number || 5;
    const url = `https://api.apilayer.com/world_news/search-news?text=India&number=${num}`;

    try {
        const response = await fetch(url, requestOptions);
        const data = await response.json();
        // console.log(data);
        res.json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
        return; // Add this line to exit the function after sending the error response
    }
};

export default api;

