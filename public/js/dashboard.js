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
const delButtonHandler = async (event) => {
    if (event.target.classList.contains("delete")) {
      const id = event.target.value;
  
      console.log("============================", event.target);
      const response = await fetch(`/api/blogs/${id}`, {
        method: "DELETE",
      });
  
      if (response.ok) {
        document.location.replace("/dashboard");
      } else {
        alert("Failed to delete project");
      }
    }
  };
  document.querySelector("#deleteBtn").addEventListener("click", delButtonHandler);