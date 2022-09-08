
function SendMail(){
    var params ={
        from_name: document.getElementById("fullname").value,
        email_id: document.getElementById("email_id").value,
        massage: document.getElementById("massage").value
    }
    emailjs.send("service_wob8y3n", "template_8tombzn", params).then(function(res){
        alert("Sucess!" +res.status)
    })
}
