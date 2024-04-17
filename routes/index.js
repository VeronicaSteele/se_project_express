const router = require("express").Router;

const userRouter = require("./users");
router.use('/users', userRouter);

const userRouter = require("./clothingItems");
router.use('/items', itemRouter);


module.exports = router;