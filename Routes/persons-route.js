const express = require("express");
const router = express.Router();

const personController = require("../Controller/person-contoller");

router.get("/:name", personController.getPersonByName);
router.get("/", personController.getPersons);
router.post("/", personController.createPerson);

router.put("/:name", personController.updatePerson);
router.delete("/:name", personController.deletePerson);

module.exports = router;
