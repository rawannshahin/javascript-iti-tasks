 //Get all Countries
 var tbl = document.getElementById("tbl");


 var request = new XMLHttpRequest();


 request.open("get", "https://restcountries.com/v3.1/all");



 request.send();


 request.addEventListener("load", function () {
     var data = JSON.parse(request.responseText);


    for (var i = 0; i < data.length; i++) {
        var row =
            `
            <tr>
                 <td>${data[i].name.common}</td>
                 <td>${data[i].capital[0]}</td>
            </tr>

         `
         tbl.insertAdjacentHTML("beforeend", row)


    }
 })






// var tbl = document.getElementById("tbl");

//  get country by name using function

// var tbl = document.getElementById("tbl");


// function getCountryData(countryName) {
//     var request = new XMLHttpRequest();


//     request.open("get", `https://restcountries.com/v3.1/name/${countryName}`);

//     request.send();


//     request.addEventListener("load", function () {
//         var data = JSON.parse(request.responseText);
//         var row =
//             `
//             <tr>

//                 <td>${data[0].name.common}</td>
//                 <td>${data[0].capital[0]}</td>
//             </tr>
//         `

//         tbl.insertAdjacentHTML("beforeend", row)


//     })

// }


// getCountryData("egypt");
// getCountryData("usa");
// getCountryData("canada");