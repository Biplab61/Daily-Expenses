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
                if(un == "Koushik" && pw == "Koushik@12"){
                location.replace("Koushik.html")
                // document.write("<center><h1>Comming Soon!<h1></center>")
            }
            else{
                alert("Invalid UserName and Password........!   Please try Again........");
            }
            }, 1100);
         }

         function view(){
            document.write("<center><h1>Comming Soon!<h1></center>");
        }

          //   Date Checker and Picker Js
       
          var date = new Date();
               var tdate = date.getDate();
               var mintDate = date.getDate()-1;
               var month = date.getMonth()+1;
               if(tdate<10){
                   tdate = '0' + tdate;
               }
               if(mintDate<10){
                   mintDate = '0' + mintDate;
               }
               if(month<10){
                   month = '0' + month;
               }
               var year = date.getFullYear();
               
               var minDate = year + '-' + month + '-' + tdate;
               var lowDate = year + '-' + month + '-' + mintDate;
               document.getElementById("Date-Checker-Picker").setAttribute('min',lowDate);
               document.getElementById("Date-Checker-Picker").value = minDate;
               document.getElementById("Date-Checker-Picker").setAttribute('max',minDate);




const scriptURL = 'https://script.google.com/macros/s/AKfycbwXoPCD_YfashnvGc5b85hvgQThTP1PbtAxNVtQ6AZF64ruSws1IwO30MQEltccN0P_Ag/exec'
         const form = document.forms['dailyexp']
       
         form.addEventListener('submit', e => {
           e.preventDefault()
           fetch(scriptURL, { method: 'POST', body: new FormData(form)})
             .then(response => alert("Thank you Koushik Singha.....    Your Data has Been Submitted Successfully in Our Database.....!"))
             .catch(error => console.error('Error!', error.message))
         })
         
      