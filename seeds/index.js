const sequelize = require("../config/connection")
const {User,Blog} = require("../models")

const users = [
    {
        username:"Nicole",
        password:"password"
    },
    {
        username:"Nicole2",
        password:"password1"
    },
    {
        username:"Nicole3",
        password:"password2"
    }
]

const blogs = [
    {
        title:"Tech Stuff",
        body:"Welcome to my blog, i'm going to talk to you about tech stuff",
        UserId:1
    },
    {
        title:"Variable",
        body:"This is a variable",
        UserId:1
    },
    {
        title:"Computer stuff",
        body:"This is cmputer stuff",
        UserId:2
    }
]

const createBlog = async ()=>{
    try{
        await sequelize.sync({force:true})
        await User.bulkCreate(users, {
            individualHooks:true
        });
        await Blog.bulkCreate(blogs);
        process.exit(0);
    } catch(err){
        console.log(err)
    }
}

createBlog()