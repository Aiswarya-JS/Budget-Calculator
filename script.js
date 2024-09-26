function login(){
    var name=uname.value
    localStorage.setItem('username',name)
    window.location='./login.html' 
}