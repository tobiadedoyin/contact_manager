const { Router } = require("express");
const {
  getAllContacts,
  getSingleContact,
  addContact,
  editContact,
  deleteContact,
} = require("../controller/contactController");

const router = Router();

router.get("/", getAllContacts);
router.get("/:id", getSingleContact);
router.post("/addContact", addContact);
router.put("/editContact/:id", editContact);
router.delete("/delete/:id", deleteContact);

module.exports = router;
