const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Notes = require('../models/Notes');
const { body, validationResult } = require('express-validator');

//get All Notes: get "/api/auth/fetchallnotes" required Login.
router.get('/fetchallnotes', fetchuser, async (req, res) => {
  try {
    const notes = await Notes.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Some Error Occurred" });
  }
});

//Add Notes: POST "/api/auth/addnote" required Login.
router.post(
  '/addnote',
  [
    body('title').isLength({ min: 3 }),
    body('description', 'description must Be Atleast 5 Character').isLength({ min: 5 })
  ],
  fetchuser,
  async (req, res) => {

    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ error: errors.array() });
      }

      const { title, description, tag } = req.body;

      const note = new Notes({
        title,
        description,
        tag,
        user: req.user.id
      });

      const saveNotes = await note.save();
      res.json(saveNotes);

    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Some Error Occurred" });
    }

  }
);

//Delete existing Notes: DELETE "/api/auth/deletenote" required Login.

module.exports = router;
