const { Router } = require("express");
const {
  getAllContacts,
  getSingleContact,
  addContact,
  editContact,
  deleteContact,
} = require("../controller/contactController");
const validateToken = require("../middleware/validateToken");

const router = Router();

router.use(validateToken);
router.get("/", getAllContacts);
router.get("/:id", getSingleContact);
router.post("/addContact", addContact);
router.put("/editContact/:id", editContact);
router.delete("/delete/:id", deleteContact);

module.exports = router;
