    function validate(){
        event.preventDefault(); 
        const mail =document.getElementById('loginEmail').value;
        const pass = document.getElementById('loginPassword').value;
            if (mail=="rajasujay923@gmail.com" && pass=="Sujay@89"){
                alert("Login successful");
                window.location.href = "index.html";
            }
            else{
                alert("Invalid email or password");
            }
    }