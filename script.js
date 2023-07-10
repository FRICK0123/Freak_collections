
function validate(){
    var mail = document.getElementById('text').value;
    var regx = /^([a-zA-Z0-9\.]+)@([a-zA-Z0-9]+)(\.[a-zA-Z]+)$/;

    if(regx.test(mail)){
      window.location.href = "success.html?email=" + encodeURIComponent(mail);
    } else {
        document.getElementById('error').style.opacity = "100%";
        document.getElementById('text').style.border = "1px solid rgb(255, 60, 0, .4)";
        document.getElementById('text').style.backgroundColor = "rgb(255, 60, 0, .2)";
        document.getElementById('text').style.color = "rgb(255, 60, 0)";
    }
}
