const asyncHandler = require("express-async-handler");
/* 
@desc Get all contacts
@route GET /api/contacts
@access public
*/
const getAllContacts = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "get all contacts" });
});

/* 
@desc Get a single contacts
@route GET /api/contacts/:id
@access public
*/

/* 
@desc create a single 
@route POST /api/contacts/addContact
@access public
*/
const addContact = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    //.json({ message: "All fields are required" });
    throw new Error("All fields are required");
    //return;
  }
  console.log(req.body);
  return res.status(201).json({ message: "contact created" });
});

/* 
@desc edit contact details
@route PUT api/contacts/editcontact/:id
@access public
*/

/* 
@desc delete a single contacts
@route delete /api/contacts/delete/:id
@access public
*/
module.exports = {
  getAllContacts,
  // getSingleContact,
  addContact,
  // editContact,
  // deleteSingleContanct,
};
