const Person = require("../Models/Person");
const mongoose = require("mongoose");

exports.getPersons = async (req, res) => {
  try {
    const persons = await Person.find();
    const info = persons.length === 0 ? "Persons not found" : "Persons  found";

    return res.status(200).json({
      status: "Success",
      data: { persons: persons },
      length: persons.length,
      message: info,
    });
  } catch (error) {
    return res.status(404).json({
      status: "Failed",
      data: error.message,
      message: info,
    });
  }
};

exports.createPerson = async (req, res) => {
  if (!req.body.name || req.body.name * 1) {
    console.log(typeof (req.body.name * 1));
    const info =
      req.body.name * 1
        ? "The name value should be a string"
        : "Name content can not be empty!";
    res.status(400).send({ message: info });
  } else {
    const persons = await Person.find();

    const user = new Person({
      name: req.body.name.toLocaleLowerCase(),
      position: req.body.position.toLocaleLowerCase() || "Nil",
      id: persons.length + 1,
    });
    user
      .save()
      .then((data) => {
        const info = "User created successfully";
        res
          .status(200)
          .json({ status: "Success", data: { data }, message: info });
      })
      .catch((err) => res.status(500).send({ message: err.message }));
  }
};

exports.getPersonByName = async (req, res) => {
  let person;
  if (req.params.name * 1) {
    try {
      person = await Person.findOne({ id: req.params.name });
      if (person == null) {
        return res.status(404).json({ message: "Person not found" });
      } else {
        return res.status(200).json({
          status: "Success",
          data: { person: person },
          length: person.length,
          message: "Person is found",
        });
      }
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  } else {
    try {
      person = await Person.findOne({ name: req.params.name });
      if (person == null) {
        return res.status(404).json({ message: "Person not found" });
      } else {
        return res.status(200).json({
          status: "Success",
          data: { person: person },
          length: person.length,
          message: "Person is found",
        });
      }
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }
};

exports.deletePerson = async (req, res) => {
  let person;
  if (req.params.name * 1) {
    try {
      person = await Person.findOneAndDelete({ id: req.params.name });
      if (person == null) {
        return res.status(404).json({ message: "Person not found" });
      } else {
        return res.status(200).json({
          status: "Success",
          data: { person: person },
          message: "Person deleted",
        });
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  } else {
    try {
      person = await Person.findOneAndDelete({ name: req.params.name });
      if (person == null) {
        return res.status(404).json({ message: "Person not found" });
      } else {
        return res.status(200).json({
          status: "Success",
          data: { person: person },
          message: "Person deleted",
        });
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
};

exports.updatePerson = async (req, res) => {
  let person;
  if (req.params.name * 1) {
    try {
      person = await Person.findOne({ id: req.params.name });
      if (person == null) {
        return res.status(404).json({ message: "Person not found" });
      } else {
        if (req.body.name != null) {
          person.name = req.body.name;
        }
        if (req.body.position != null) {
          person.position = req.body.position;
        }
        const updatedPerson = await person.save();
        res.status(200).json({
          status: "Success",
          data: { person: person },
          message: "Person Updated",
        });
      }
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  } else {
    try {
      person = await Person.findOne({ name: req.params.name });
      if (person == null) {
        return res.status(404).json({ message: "Person not found" });
      } else {
        if (req.body.name != null) {
          person.name = req.body.name;
        }
        if (req.body.position != null) {
          person.position = req.body.position;
        }
        const updatedPerson = await person.save();
        res.status(200).json({
          status: "Success",
          data: { person: person },
          message: "Person Updated",
        });
      }
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
};
