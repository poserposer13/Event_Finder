$(document).ready(function () {
    let apiKey = "6776e4163d7073e13c7450202afa0977"


    $("#music-form").on("submit", function (event) {


        event.preventDefault()

        let bandInput = $("#music-search").val()

        console.log(bandInput)

        let queryUrl = "http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&limit=3&artist=" + bandInput + "&api_key=" + apiKey + "&format=json"

        $.ajax({
            url: queryUrl,
            method: "GET"
        }).then(function (response) {


            console.log(response);
            
            let ticketURLOne = "https://app.ticketmaster.com/discovery/v2/attractions.json?classificationName=music&keyword=" + bandInput + "&apikey=vhhf7TOUkJZgBudPFaEb54KYBnU9MPQL"
            
            $.ajax({
                url: ticketURLOne,
                method: "GET"
            }).then(function (res){
                console.log(res)
            });

            let similarArtistOne = response.similarartists.artist[0].name;
            let ticketURLTwo = "https://app.ticketmaster.com/discovery/v2/attractions.json?classificationName=music&keyword=" + similarArtistOne + "&apikey=vhhf7TOUkJZgBudPFaEb54KYBnU9MPQL"
            $.ajax({
                url: ticketURLTwo,
                method: "GET"
            }).then(function (res){
                console.log(res)
            });

            let similarArtistTwo = response.similarartists.artist[1].name;
            let ticketURLThree = "https://app.ticketmaster.com/discovery/v2/attractions.json?classificationName=music&keyword=" + similarArtistTwo + "&apikey=vhhf7TOUkJZgBudPFaEb54KYBnU9MPQL"
            $.ajax({
                url: ticketURLThree,
                method: "GET"
            }).then(function (res){
                console.log(res)
            });

    
        });
        });
    })
