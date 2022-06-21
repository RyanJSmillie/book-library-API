const { Book } = require("../models");

exports.create = async (req, res) => {

    try {
    const newBook = await Book.create(req.body);
    res.status(201).json(newBook) 
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.read = async (req, res) => {

    try {
    const books = await Book.findAll();
        res.status(200).json(books);
    } catch (err) {
    res.status(500).json(err);
    }
};

exports.readById = async (req, res) => {

    try {
        const { id } = req.params
        const book = await Book.findByPk(id);   

    if (!book) {
        res.status(404).json({ error: "The book could not be found."});
    } else {
        res.status(200).json(book)
    }

    } catch (err) {
        res.status(500).json(err);
    }
};