const asyncHandler = require("express-async-handler");
const Contact = require("../models/dbSchema");
const inputValidation = require("../validation/inputValidation");
/* 
@desc Get all contacts
@route GET /api/contacts
@access public
*/
const getAllContacts = async (req, res) => {
  const contacts = await Contact.find();
  return res
    .status(200)
    .json({ message: "List of all contacts ", data: contacts });
};
/* 
@desc Get a single contacts
@route GET /api/contacts/:id
@access public
*/
const getSingleContact = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).json({ message: "contact not found" });
    }
    return res.status(200).json({ message: "contact details", data: contact });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error.message });
  }
};

/* 
@desc create a single 
@route POST /api/contacts/addContact
@access public
*/
const addContact = async (req, res) => {
  const { name, email, phone } = req.body;
  const userInput = { name, email, phone };
  const validation = inputValidation.safeParse(userInput);
  try {
    if (!validation.success) {
      return res.status(400).json({
        message: "validation error",
        error: validation.error.issues[0].message,
      });
    }
    if (!name || !email || !phone) {
      res.status(400);
      throw new Error("All fields are required");
    }

    const existUser = await Contact.findOne({ email });
    if (existUser) {
      return res.status(400).json({ message: "email already exist" });
    }
    const contact = await Contact.create({ name, email, phone });
    //console.log(req.body);
    return res.status(201).json({ message: "contact created", data: contact });
  } catch (error) {
    console.log(error.message);
  }
};

/* 
@desc edit contact details
@route PUT api/contacts/editcontact/:id
@access public
*/
const editContact = async (req, res) => {
  const { name, phone } = req.body;

  if (!name || !phone) {
    res.status(400).json("All fields are required");
  }
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    return res.status(404).json({ message: "contact not found" });
  }

  const updateContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  return res
    .status(200)
    .json({ message: "contact edited", data: updateContact });
};

/* 
@desc delete a single contacts
@route delete /api/contacts/delete/:id
@access public
*/
const deleteContact = async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    return res.status(400).json("contact not found");
  }

  await Contact.deleteOne();
  return res.status(200).json({ message: "contact deleted" });
};

module.exports = {
  getAllContacts,
  getSingleContact,
  addContact,
  editContact,
  deleteContact,
};
