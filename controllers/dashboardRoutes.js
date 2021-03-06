const express = require('express');
const router = express.Router();
const {User,Blog} = require('../models');

router.get("/",(req,res)=>{
    Blog.findAll(
        {include: [ {
            model: User,
            attributes: ["username"],
        }]}
    ).then(blogs=>{
        console.log(blogs)
        const hbsBlogs = blogs.map(blog=>blog.get({plain:true}))
        console.log("==========")
        console.log(hbsBlogs)
        const loggedIn = req.session.user?true:false
        res.render("home",{blogs:hbsBlogs,loggedIn,username:req.session.user?.username})
    })
})

router.get("/login",(req,res)=>{
    if(req.session.user){
        return res.redirect("/dashboard")
    }
    res.render("login")
})

router.get("/dashboard",(req,res)=>{
    if(!req.session.user){
        return res.redirect("/login")
    }
    Blog.findAll({where: {user_id:req.session.user.id }},
        {
    }).then(userData=>{
        // console.log(userData);
        const blogs = userData.map((user)=>user.get({plain:true}))
        console.log("=======")
        console.log(blogs);
        // blogs.loggedIn = req.session.user?true:false
        res.render("dashboard",{blogs})
    })
})

module.exports = router;