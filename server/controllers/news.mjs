import fetch from 'node-fetch';
import dotenv from "dotenv";

dotenv.config();

const date = async (req, res) => {
    let { day, month, year, apiKey } = req.body;
    let e_date = `${year}-${month}-${day}`;
    console.log(e_date)
    const myHeaders = new Headers();
    myHeaders.append("apikey", apiKey);

    const requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
    };
    const num = 5;
    const url = `https://api.apilayer.com/world_news/search-news?number=${num}&latest-publish-date=${e_date}&language=en&source-countries=in`;

    try {
        const response = await fetch(url, requestOptions);
        const data = await response.json();
        // console.log(da)
        res.status(200).send(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
        return; // Add this line to exit the function after sending the error response
    }
};

const country = async (req, res) => {
    let country = req.params.country;
    const myHeaders = new Headers();
    myHeaders.append("apikey", process.env.NEWS_API);

    const requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
    };
    const num = 5;
    const url = `https://api.apilayer.com/world_news/search-news?source-countries=${country}`;

    try {
        const response = await fetch(url, requestOptions);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
        return; // Add this line to exit the function after sending the error response
    }
};

const text = async (req, res) => {
    let text = req.params.text;

    const myHeaders = new Headers();
    myHeaders.append("apikey", process.env.NEWS_API);

    const requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
    };
    const num = 5;
    const url = `https://api.apilayer.com/world_news/search-news?text=${text}&number=${num}`;

    try {
        const response = await fetch(url, requestOptions);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
        return; // Add this line to exit the function after sending the error response
    }
};

const category = async (req, res) => {
    let text = req.params.category;

    const myHeaders = new Headers();
    myHeaders.append("apikey", process.env.NEWS_API);

    const requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
    };
    const num = 5;
    const url = `https://api.apilayer.com/world_news/search-news?text=${text}&number=${num}`;

    try {
        const response = await fetch(url, requestOptions);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
        return; // Add this line to exit the function after sending the error response
    }
};

const language = async (req, res) => {
    let text = req.params.category;

    const myHeaders = new Headers();
    myHeaders.append("apikey", process.env.NEWS_API);

    const requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
    };
    const num = 5;
    const url = `https://api.apilayer.com/world_news/search-news?&language=${language}`;

    try {
        const response = await fetch(url, requestOptions);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
        return; // Add this line to exit the function after sending the error response
    }
};

export default {
    date,
    text,
    country,
    category
};

