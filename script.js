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

$(document).on(function () {
    let apiKey = "50433d5e611ff3beca10cdedf2ad213533cb9b38"

    let queryURL = "https://calendarific.com/api/v2/location?api_key=" + apiKey + "&format=json"
    $ajax({
        url: queryURL,

    })
    $.ajax({
        url: "https://calendarific.com/api/v2/location?api_key=" + apiKey + "&format=json"
    
    })
    .then(function (response) {
        console.log(response);
        let calendar = $("#event-calendar");
        calendar.html(response)
    })
})




























