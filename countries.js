//ADD EVENT LISTENERS
window.addEventListener("load", start, false);


function start(){
     document.getElementById("countries").addEventListener("change", ps,false);
      }
      
      
function ps(){
var personSelected = document.getElementById("countries").value; 
alert(countryselected);
    document.getElementById("countryselected").innerHTML = countryselected
}




// Get the INPUT DATA from a JSON file and update the charts
ajaxcall();

/** **************************************************************************************** **/



function ajaxcall () {
/* Javascript AJAX REQUEST TO JSON FILE */
data = "countries.json";

// function salesfunction() {
  //  alert(data);
  //  data1 ="countries.json";
  
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      data1 = xhttp.responseText;
      //alert(data1);
      data = JSON.parse(data1);
     //DATA PARSED NOW _ CARRY OUT ACTIONS ON THE DATA OBJECTS WITHIN HERE 
     console.log('Error:', data);
     
     //Accessing data in the nested array
     //var value = data.countries[1].country;
     //alert (value);
     
     //loop through the nested json
     for(var i = 0, l = data.country.length; i < l; i++) {
    // alert(data.countries[i].country);
 
 
    // Populate the HTML DOM Form Select Button from the JSON File contents
    var x = document.getElementById("countries");
    var option = document.createElement("option");
    option.text = data.countries[i].country;

    x.add(option);
     
         
     }

     
 /* AJAX REQUEST END ******************************************************  */
    }
  };
  xhttp.open("GET", data, true);
  xhttp.send();
};  