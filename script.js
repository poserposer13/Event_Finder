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




























