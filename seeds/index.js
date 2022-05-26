const sequelize = require("../config/connection")
const {User,Blog} = require("../models")

const seed = async () => {
    await sequelize.sync({force:true})
    await User.bulkCreate(
    [
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
])

await Blog.bulkCreate (
    [
        {
        title:"Tech Stuff",
        content:"Welcome to my blog, i'm going to talk to you about tech stuff",
    },
    {
        title:"Variable",
        content:"This is a variable",
    },
    {
        title:"Computer stuff",
        content:"This is cmputer stuff",
    }


// const createBlog = async ()=>{
//     try{
//         await sequelize.sync({force:true})
//         await User.bulkCreate(users, {
//             individualHooks:true
//         });
//         await Blog.bulkCreate(blogs);
//         process.exit(0);
//     } catch(err){
//         console.log(err)
//     }
    ])
    process.exit(0)}

seed()