document.querySelector("#newBlog").addEventListener("submit",e=>{
    e.preventDefault();
    const userObj = {
        title:document.querySelector("#title").value,
        content:document.querySelector("#body").value,
    }
    console.log(userObj)
    fetch("/api/blogs",{
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