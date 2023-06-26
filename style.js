function clearError(){
    errors=document.getElementById('error');
    for(let item in errors){
        item.innerHTML="";
    }
}

function setError(id,msg){
    element=document.getElementById(id);
    element.getElementsByClassName('error')[0].innerHTML=msg;
}

function validate(){
    var val=true;
    clearError();
    var user=document.forms["reg"]["user"].value.trim();
    if(user.length<3 && user.length>0){
        setError("user",'*User name must have minimum 3 char')
        val=false;
    } else if(user==""){
        setError("user",'*User name cannot be blank');
        val=false;
    }


    var email=document.forms["reg"]["email"].value;
    if(email==""){
        setError("mail",'*Enter email');
        val=false;
    }

    var phone=document.forms["reg"]["num"].value;
    if(phone.length!=10){
        setError("phone",'*Number must have 10 digits');
        val=false;
    }

    var pass=document.forms["reg"]["pass"].value;
    if(pass.length<6 && pass.length>0){
        setError("pass",'*Length of password must be greater than 6');
        val=false;
    }else if(pass.length==0){
        setError("pass",'*password required');
        val=false;
    }

    var cpass=document.forms["reg"]["cpass"].value;
    if(cpass!=pass){
        setError("cpass",'*Password not matched');
        val=false;
    }else if(cpass==""){
        setError("cpass",'*Enter confirmed password');
        val=false;
    }


    var address=document.forms["reg"]["address"].value;
    if(address==""){
        setError("add",'*Enter your address');
        val=false;
    }

    return val;
}