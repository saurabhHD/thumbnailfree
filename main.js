$(document).ready(function(){
    $(".contact-form").on("submit", function(e){
        e.preventDefault();
        
        let name = $("[name=name]").val();
        let email = $("[name=email]").val();
        let subject = $("[name=subject]").val();
        let message = $("[name=message]").val();
        if(name != "" && email != "" && subject != "" && message != ""){
            let data = {
                name : name,
                email : email,
                subject : subject,
                message : message
            };
            data = JSON.stringify(data);
            data = data.replace('{','');
            data = data.replace('}','');   
            let link = `https://wa.me/918910569936?text=${data}`;
            let a = document.createElement('a');
            a.href= link;
            a.target = "_blank";
            $("body").append(a);
            a.click();
            
            // Relese Memory
            delete name;
            delete email;
            delete subject;
            delete message;
            delete data;
            delete link;
            delete a;
            
        }else{
            alert('Please fill the complete form');
        }
        
        // console.log(link)
    });
});

