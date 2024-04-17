const router = require('express').Router()
const {createItem} = require('../controllers/clothingItems');

router.get("/", ()=> console.log("GET items"));
router.post("/", createItem);
router.delete("/",()=>console.log("delete items"))


module.exports = router;