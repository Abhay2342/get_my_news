const fetch = require('node-fetch');

const handleApiCall = async (req, res) => {
    var myHeaders = new Headers();
    myHeaders.append("apikey", "YSgf3tpbvgB42t4KIRWZN2VPjGHBkrVK");

    var requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
    };
    num = req.query.number || 5;
    const url = `https://api.apilayer.com/world_news/search-news?text=India&number=${num}`;

    try {
        const response = await fetch(url, requestOptions);
        const data = await response.json();
        // console.log(data);
        res.json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
    handleApiCall,
};
