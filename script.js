$(document).ready(function () {
    let apiKey = "6776e4163d7073e13c7450202afa0977"

    
    $("#music-form").on("submit", function (event) {


        event.preventDefault()

        let bandInput = $("#music-search").val()

        console.log(bandInput)

        let queryUrl = "http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&limit=3&artist=" + bandInput + "&api_key=" + apiKey + "&format=json"
        // This call is to get similar artists to the one that the user inputs
        $.ajax({
            url: queryUrl,
            method: "GET"
        }).then(function (response) {


            console.log(response);

            let ticketApi = "vhhf7TOUkJZgBudPFaEb54KYBnU9MPQL"

            let ticketURLOne = "https://app.ticketmaster.com/discovery/v2/attractions.json?classificationName=music&keyword=" + bandInput + "&apikey=" + ticketApi
            // This call pulls from ticketmaster and displays their name and their events link while also displaying the card
            $.ajax({
                url: ticketURLOne,
                method: "GET"
            }).then(function (res) {
                console.log(res)
                let displayArtistName = $("#artist-name-one");
                displayArtistName.text(res._embedded.attractions[0].name);
                let eventLinkOne = $("#link-artist-one");
                eventLinkOne.attr("href", res._embedded.attractions[0].url)
                $("#card-display-one").removeClass("hide")
            });
            // This call pulls from last.fm and displays a short bio about the artist thats searched
            $.ajax({
                url: "http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=" + bandInput + "&api_key=" + apiKey + "&format=json"
            }).then(function (response) {
                console.log(response);
                let artistOneBio = $("#artist-one-bio");
                artistOneBio.html(response.artist.bio.summary);
            })
            // This call pulls from ticketmaster and displays their name and their events link while also displaying the card
            let similarArtistOne = response.similarartists.artist[0].name;
            console.log
            let ticketURLTwo = "https://app.ticketmaster.com/discovery/v2/attractions.json?classificationName=music&keyword=" + similarArtistOne + "&apikey=" + ticketApi
            $.ajax({
                url: ticketURLTwo,
                method: "GET"
            }).then(function (res) {
                console.log(res)
                let displayArtistName = $("#artist-name-two");
                displayArtistName.text(res._embedded.attractions[0].name);
                let eventLinkTwo = $("#link-artist-two");
                eventLinkTwo.attr("href", res._embedded.attractions[0].url)
                $("#card-display-two").removeClass("hide")
            });
            // This call pulls from last.fm and displays a short bio about a similar artist that is being searched
            $.ajax({
                url: "http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=" + similarArtistOne + "&api_key=" + apiKey + "&format=json"
            }).then(function (response) {
                console.log(response);
                let artistTwoBio = $("#artist-two-bio");
                artistTwoBio.html(response.artist.bio.summary);
            })
            // This call pulls from ticketmaster and displays their name and their events link while also displaying the card
            let similarArtistTwo = response.similarartists.artist[1].name;
            console.log(similarArtistTwo);
            let ticketURLThree = "https://app.ticketmaster.com/discovery/v2/attractions.json?classificationName=music&keyword=" + similarArtistTwo + "&apikey=" + ticketApi
            $.ajax({
                url: ticketURLThree,
                method: "GET"
            }).then(function (res) {
                console.log(res)
                let displayArtistName = $("#artist-name-three");
                displayArtistName.text(res._embedded.attractions[0].name);
                let eventLinkThree = $("#link-artist-three");
                eventLinkThree.attr("href", res._embedded.attractions[0].url);
                $("#card-display-three").removeClass("hide");

            });
            // This call pulls from last.fm and displays a short bio about a similar artist that is being searched
            $.ajax({
                url: "http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=" + similarArtistTwo + "&api_key=" + apiKey + "&format=json"
            }).then(function (response) {
                console.log(response);
                let artistThreeBio = $("#artist-three-bio");
                artistThreeBio.html(response.artist.bio.summary);
            })

        });
    });
})