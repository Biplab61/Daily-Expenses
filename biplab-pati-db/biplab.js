        // Disable Right Click
        document.addEventListener("contextmenu", function(e){
            e.preventDefault();
        },false)

        // Disable Shortcut Keys
        document.addEventListener("keydown",function(e){
            if(e.ctrlKey || e.keycode==123){
                e.stopPropagation();
                e.preventDefault();
            }
        });

                // Login Details
                function myPage(){
            var un =document.getElementById("Username").value;
            var pw =document.getElementById("Userpass").value;
            setTimeout(function(){
                if(un == "Biplab" && pw == "Biplab@12"){
                location.replace("biplab.html")
                // document.write("<center><h1>Comming Soon!<h1></center>")
            }
            else{
                alert("Invalid UserName and Password........!   Please try Again........");
            }
            }, 1100);
         }


         const scriptURL = 'https://script.google.com/macros/s/AKfycbwBulnbTiCj8Q1K4NJqKAlaViuZoz6GVsJ7IvoUkWgQAQcAYYa3-x09Ir8pjIDGvHXFKQ/exec'
         const form = document.forms['meal']
       
         form.addEventListener('submit', e => {
           e.preventDefault()
           fetch(scriptURL, { method: 'POST', body: new FormData(form)})
             .then(response => alert("Thank you Biplab.....    Your Data has Been Submitted Successfully in Our Database.....!"))
             .catch(error => console.error('Error!', error.message))
         })


         function view(){
            document.write("<center><h1>Comming Soon!<h1></center>")
         }
         
         
         
          //   Date Checker and Picker Js
       
               var date = new Date();
               var tdate = date.getDate();
               var mintDate = date.getDate()-1;
               var month = date.getMonth()+1;
               if(tdate<10){
                   tdate = '0' + tdate;
               }
               if(tdate<10){
                   month = '0' + tdate;
               }
               var year = date.getFullYear();
               
               var minDate = year + '-' + month + '-' + tdate;
               var mintiDate = year + '-' + month + '-' + mintDate;
               document.getElementById("Date-Checker-Picker").setAttribute('min',mintiDate);
               document.getElementById("Date-Checker-Picker").value = minDate;
               document.getElementById("Date-Checker-Picker").setAttribute('max',minDate);
         