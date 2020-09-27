$(document).ready(function () {
    let apiKey = "6776e4163d7073e13c7450202afa0977"
    let queryUrl = "http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=chris+gaines&api_key=" + apiKey + "&format=json"
    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function (response) {


        console.log(response)
    });



})



$(document).ready(function () {
    let calendarApi = "50433d5e611ff3beca10cdedf2ad213533cb9b38"
    $("#event-calendar").ready(function (){
        let queryURL = "https://calendarific.com/api/v2/holidays?api_key=" + calendarApi + "&country=US&year=2020"
        $.ajax({
            url: queryURL,
            method: "GET",
        }).then(function (response) {
            let responseJSON = JSON.stringify(response);
            console.log(responseJSON);
        })
    })
})




























