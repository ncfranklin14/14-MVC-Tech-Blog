const logout = function(){
    fetch('/api/users/logout', {
        method: 'GET', 
        headers: { 'Content-Type': 'applicationjson'}
    }).then((res)=>{
        if (res.ok){
            document.location.replace('/')
        } else{
            alert('log out failed!')
        }
    })
}

document.getElementById('logout').addEventListener('click', logout)