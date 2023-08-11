/* 
@desc Get all contacts
@route GET /api/contacts
@access public
*/
const getAllContacts = (req, res) => {
  res.status(200).json({ message: "get all contacts" });
};

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
const addContact = (req, res) => {
  console.log(req.body);
};

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
