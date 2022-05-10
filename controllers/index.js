const express = require('express');
const router = express.Router();

const userRoutes = require("./userRoutes");
router.use("/api/users",userRoutes)

const blogRoutes = require("./blogRoutes");
router.use("/api/blogs",blogRoutes)

const dashboardRoutes = require("./dashboardRoutes");
router.use("/",dashboardRoutes)

router.get("/showsessions",(req,res)=>{
    res.json(req.session)
})


module.exports = router;