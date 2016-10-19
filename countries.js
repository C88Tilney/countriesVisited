// the AJAX get - It get the JSON file and fill it will all the countries

function ajax_get_json() {

    var hr = new XMLHttpRequest();

    hr.open("GET", "mylist.json", true);

    hr.setRequestHeader("Content-type", "application/json", true);

    hr.onreadystatechange = function () {
        if (hr.readyState == 4 && hr.status == 200) {
            var data = JSON.parse(hr.responseText);
            var results = document.getElementById("results");
            results.innerHTML = "";
            for (var obj in data) {
                results.innerHTML += '<input type="checkbox">' + " " + data[obj].country + "<br/>";
            }
        }
    }

    hr.send(null);
    results.innerHTML = "requesting..."

}

ajax_get_json();

//ADD Event Listeners 
document.getElementById("calculate").addEventListener("click", validate, false);
document.getElementById("calculate").addEventListener("click", appear, false);

//Validation Function
function validate() {
    var countryVisted = document.querySelectorAll('input[type="checkbox"]:checked').length;
    console.log(countryVisted);
    var percentagesBeen = ((countryVisted / 49) * 100).toFixed();
    var percentagesYetToVisit = (100 - percentagesBeen);
    console.log(percentagesBeen);
    console.log(percentagesYetToVisit);

    if (percentagesBeen == 0) {
        var reply = "Do you live in Europe?";
    }
    else if (percentagesBeen > 0 && percentagesBeen <= 20) {
        var reply = "You need to travel around Europe more!";
    }
    else if (percentagesBeen > 20 && percentagesBeen <= 50) {
        var reply = "You pretty well Traveled, but you still need to got a lot to go!";
    } 
    else if (percentagesBeen > 50) {
        var reply = "Wow! Well Done! Not many more countries to Visit now!";
    }
    else {
        var reply = "error";
    }
    console.log(reply);

    document.getElementById("response").innerHTML = reply;
    //    var checkedValue = $('input:checkbox:checked').map(function() {
    //        console.log(checkedValue);
    //        return this.value;
    //    }).get().join(',');



    // Canvas.js file     
    window.onclick = function () {
        var chart = new CanvasJS.Chart("chartContainer", {
            backgroundColor: "transparent",
            title: {
                text: ""
            },
            data: [
                {
                    indexLabelFontColor: "#000",
                    type: "pie",
                    dataPoints: [
                        {
                            y: parseInt(percentagesBeen),
                            indexLabel: "% of European countries you have been to",
                            color: "#e53000"
                        },
                        {
                            y: parseInt(percentagesYetToVisit),
                            indexLabel: "% of European countries yet to isit",
                            color: "#2caae2"
                        }
			]
		}
		]
        });
        chart.render();
    }
};


// hide the div answer until onclick event



$(function() {
    $('#response').hide();
});

function appear() {  
$('body').on("click", function() {
    $('#response').show();
    
});
};