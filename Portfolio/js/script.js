
import AOS from 'aos'
import '../style.css'

function SendMail(){
    var params ={
        from_name : document.getElementById("fullName").value,
        email_id :document.getElementById("email_id").value,
        message:document.getElementById("message").value
    }
    emailjs.send("testid2811","template_rohcfho",params).then(function(res){
    alert("Success!"+ res.status);
    })
}

