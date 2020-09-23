// This ajax call pulls on specific artists and puts forth good information (May need to run it multiple times/see if this can run multiple keywords)
$('#search').on("click", function (event) {
    event.preventDefault();
    let keywordInput = $("#user-input").val();
    console.log(keywordInput)
    let queryUrl = "https://app.ticketmaster.com/discovery/v2/attractions.json?classificationName=music&keyword=" + keywordInput + "&apikey=vhhf7TOUkJZgBudPFaEb54KYBnU9MPQL"
    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function (response) {
        console.log(response)
    })
})