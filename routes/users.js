const router = require('express').Router()
const {getUsers, createUser, getUser} = require('../controllers/users');

router.get("/", ()=> console.log("GET users"));
router.get("/:userId", ()=> console.log("GET users by ID"));
router.post("/", createUser);

module.exports = router;