import fetch from 'node-fetch';
import dotenv from "dotenv";

dotenv.config();

const date = async (req, res) => {
    let { day, month, year } = req.body;
    let e_date = `${year}-${month}-${day}`;
    let l_date = `${year}-${month}-${day + 1}`;
    const myHeaders = new Headers();
    myHeaders.append("apikey", process.env.NEWS_API);

    const requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
    };
    const num = 5;
    const url = `https://api.apilayer.com/world_news/search-news?text=India&number=${num}&earliest-publish-date=${e_date}&latest-publish-date=${l_date}`;
    console.log(url)

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

const text = async (req, res) => {
    let { text } = req.body;

    const myHeaders = new Headers();
    myHeaders.append("apikey", process.env.NEWS_API);

    const requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
    };
    const num = 5;
    const url = `https://api.apilayer.com/world_news/search-news?text=${text}`;
    console.log(url)

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

export default {
    date,
    text
};

