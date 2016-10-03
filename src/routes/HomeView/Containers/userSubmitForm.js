<!DOCTYPE html>
<html>
<head>
<script>
function validateForm(type) {
    var Un = document.forms["Users"]["Username"].value;
    var Pw = document.forms["Users"]["Password"].value;
    if (type == "signIn"){
     if (Un == null || Un == "" || Pw == null || Pw == "") {
         alert("Name must be filled out");
         return false;
     }else{
        alert("Sign in : Username= " + Un +"Password= " + Pw  );
     }
    }
    else
    {
    if (Un == null || Un == "" || Pw == null || Pw == "") {
         alert("Name must be filled out");
         return false;
     }else{
        alert("Sign up : Username= " + Un +" Password= " + Pw  );
     }
    }
}
</script>
</head>
<body>

<form name="Users" >
Username: <input type="text" name="Username" >
Password: <input type="password" name="Password">
<button onClick = "validateForm('signIn')">Sign in</button>
<button onClick = "validateForm('signUp')">Sign up</button>
</form>

</body>
</html>
