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
        const { id } = req.params
        const reader = await Reader.findByPk(id);   

    if (!reader) {
        res.status(404).json({ error: "The reader could not be found."});
    } else {
        res.status(200).json(reader)
    }

    } catch (err) {
        res.status(500).json(err);
    }
};

exports.updateById = async (req, res) => {
    const data = req.body;
    const { id } = req.params;
    const reader = await Reader.findByPk(id)
  
    try {
        const [ updatedRows ] = await Reader.update(data, { where: {id: id} });

    if (!reader) {
        res.status(404).json({ error: "The reader could not be found."});
    } else {
        res.status(200).json(updatedRows)
    }

    } catch (err) {
        res.status(500).json(err)
    } 

  };

  exports.deleteById = async (req, res) => {
    const { id } = req.params;
    const reader = await Reader.findByPk(id)

    try {
      const deletedRows = await Reader.destroy({ where: {id: id}})

      if(!reader) {
        res.status(404).json({ error: "The reader could not be found."});
      } else {
        res.status(204).json(deletedRows)
      }

    } catch(e) {
      res.status(500).json(e);
    }

  };