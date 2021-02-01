function ajax(){
    // Creating an XHR Object
    var xhttp = new XMLHttpRequest();
    // Eventlistener
    xhttp.onreadystatechange = function(){
        // condition
        if(this.readyState==4&&this.status==200){
            var response = JSON.parse(this.responseText);
           
            var Jgrocery = response.grocery;
            
            var output ="";
            for(var i=0;i<Jgrocery.length;i++){
                output +=  `<tr>
                                <td>${Jgrocery[i].SerialNumber}</td>
                                <td>${Jgrocery[i].Name}</td>
                                <td>${Jgrocery[i].Quantity}</td>
                                <td>${Jgrocery[i].Unit}</td>
                                <td>${Jgrocery[i].Department}</td>
                                <td>${Jgrocery[i].Notes}</td>
                            </tr>`;
                            
            }
            document.getElementById("myTable").innerHTML = output;
        }
    };
    xhttp.open("GET","grocery.json",true);
    xhttp.send();
    }
    