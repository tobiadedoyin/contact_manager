const { Router } = require("express");
const {
  getAllContacts,
  addContact,
} = require("../controller/contactController");

const router = Router();

router.get("/", getAllContacts);
// router.get("/:id", getSingleContact);
router.post("/addContact", addContact);
// router.put("/editContact", editContact);
// router.delete("/delete/:id", deleteSingleContact);

module.exports = router;
