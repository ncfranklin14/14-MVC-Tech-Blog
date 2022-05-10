console.log("login linked1")
document.querySelector("#login").addEventListener("submit",e=>{
    e.preventDefault();
    const userObj = {
        username:document.querySelector("#loginUsername").value,
        password:document.querySelector("#loginPassword").value,
    }
    console.log(userObj)
    fetch("/api/users/login",{
        method:"POST",
        body:JSON.stringify(userObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
            location.href="/dashboard"
        } else {
            alert("trumpet sound")
        }
    })
})

document.querySelector("#signup").addEventListener("submit",e=>{
    e.preventDefault();
    const userObject = {
        username:document.querySelector("#signupUsername").value,
        password:document.querySelector("#signupPassword").value,
    }
    console.log(userObject)
    fetch("/api/users",{
        method:"POST",
        body:JSON.stringify(userObject),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
            console.log("signed up!")
        } else {
            alert("error")
        }
    })
})