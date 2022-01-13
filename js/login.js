function login()
{
    var user , pass; 

    user = document.getElementById("user").value;
    pass = document.getElementById("pass").value;

    if(user=== "matias" && pass === "1234")
    {
        document.getElementById("game").style.display = "flex"
        document.getElementById("login-box").style.display = "none"
    }
    if (user !== "matias" && pass !== "1234" )
    {
        alert("Ingrese usuario y contraseña valida")
    }

}
