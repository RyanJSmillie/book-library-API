const { Reader } = require("../models");

exports.create = async (req, res) => {

    try {
    const newReader = await Reader.create(req.body);
    res.status(201).json(newReader) 
    } catch (err) {
        res.status(500).json(err);
    }
    };