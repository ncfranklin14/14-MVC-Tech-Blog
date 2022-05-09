const express = require('express');
const router = express.Router();
const {Blog,User} = require('../models');

router.get("/",(req,res)=>{
    Blog.findAll({include:[User]}).then(blogs =>{
        const hbsBlogs = blogs.map(blog=>blog.get({plain:true}))
        console.log(hbsBlogs)
    res.render("home",{blogs:hbsBlogs})
    })
})

module.exports = router;