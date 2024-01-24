const fetch = require('node-fetch');
const db = require("../db.json")
const handleApiCall = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    (db.emails).forEach(mail => {
        if (email == mail) {
            if (db.passwords[mail] == password) {
                res.json("logged in");
            }
        }

    });

};

module.exports = {
    handleApiCall,
};
