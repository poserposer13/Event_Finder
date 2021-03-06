$(document).ready(function () {
    let apiKey = "6776e4163d7073e13c7450202afa0977"


    $("#music-form").on("submit", function (event) {


        event.preventDefault()

        let bandInput = $("#music-search").val()

        console.log(bandInput)

        let queryUrl = "https://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&limit=3&artist=" + bandInput + "&api_key=" + apiKey + "&format=json"
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
                $("#card-display-one").removeClass("hide");
                // let eventID = res._embedded.attractions[0].id;
                let eventsURL = "https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&keyword=" + bandInput + "&apikey=vB6vdXbGsH2TcSLAsUpWaoAxzXUYDqFt";
                $.ajax({
                    url: eventsURL,
                    method: "GET"
                }).then(function (r) {
                    console.log(r)
                    let responseDate = r._embedded.events[0].dates
                    let displayEventDate = $("#event-date");
                    displayEventDate.text(responseDate.start.localDate);
                    let displayEventLocation = $("#event-location");
                    let responseLocation = r._embedded.events[0]._embedded.venues[0];
                    displayEventLocation.text(responseLocation.name + " in " + responseLocation.city.name + ", " + responseLocation.state.stateCode)
                })
            });
            // This call pulls from last.fm and displays a short bio about the artist thats searched
            $.ajax({
                url: "https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=" + bandInput + "&api_key=" + apiKey + "&format=json"
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
                $("#card-display-two").removeClass("hide");
                // let eventID = res._embedded.attractions[0].id;
                let eventsURL = "https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&keyword=" + similarArtistOne + "&apikey=vB6vdXbGsH2TcSLAsUpWaoAxzXUYDqFt";
                $.ajax({
                    url: eventsURL,
                    method: "GET"
                }).then(function (r) {
                    console.log(r);
                    let responseDate = r._embedded.events[0].dates
                    let displayEventDate = $("#event-date-two");
                    displayEventDate.text(responseDate.start.localDate);
                    let displayEventLocation = $("#event-location-two");
                    let responseLocation = r._embedded.events[0]._embedded.venues[0];
                    displayEventLocation.text(responseLocation.name + " in " + responseLocation.city.name + ", " + responseLocation.state.stateCode)
                })
            })
            $.ajax({
                url: "https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=" + similarArtistOne + "&api_key=" + apiKey + "&format=json"
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
            // let eventID = res._embedded.attractions[0].id;
            let eventsURL = "https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&keyword=" + similarArtistTwo + "&apikey=vB6vdXbGsH2TcSLAsUpWaoAxzXUYDqFt";
            $.ajax({
                url: eventsURL,
                method: "GET"
            }).then(function (r) {
                console.log(r);
                let responseDate = r._embedded.events[0].dates
                let displayEventDate = $("#event-date-three");
                displayEventDate.text(responseDate.start.localDate);
                let displayEventLocation = $("#event-location-three");
                let responseLocation = r._embedded.events[0]._embedded.venues[0];
                displayEventLocation.text(responseLocation.name + " in " + responseLocation.city.name + ", " + responseLocation.state.stateCode)
            })
        
        })
        $.ajax({
            url: "https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=" + similarArtistTwo + "&api_key=" + apiKey + "&format=json"
        }).then(function (response) {
            console.log(response);
            let artistThreeBio = $("#artist-three-bio");
            artistThreeBio.html(response.artist.bio.summary);
        })
        });
        
        

    });
    // This call pulls from last.fm and displays a short bio about a similar artist that is being searched
    

});
