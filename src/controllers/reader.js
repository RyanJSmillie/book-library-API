const { Reader } = require("../models");

exports.create = async (req, res) => {

    try {
    const newReader = await Reader.create(req.body);
    res.status(201).json(newReader) 
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.read = async (req, res) => {

    try {
    const readers = await Reader.findAll();
        res.status(200).json(readers);
    } catch (err) {
    res.status(500).json(err);
    }
};

exports.readById = async (req, res) => {

    try {
        const readerId = req.params.id
        const reader = await Reader.findByPK(readerId);     

    if (!reader) {
        res.sendStatus(404);
    } else {
        res.status(200).json(reader)
    }

    } catch (err) {
        res.status(500).json(err);
    }
};