$('.button-link').click(function (event) {
    event.preventDefault();
    var topic = $(event.target).text();
    var newsQueryURL = "https://newsapi.org/v2/everything?q=" + topic + "&apiKey=3922d1a6ae354cf0a0cf1117b7946621"
    var videosQueryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + topic + "&type=video&maxResults=12&key=AIzaSyAXfNjKjSqLmk8Y7yfbis7sb8K3xzmiDw4"

    // $.ajax({
    //     url: newsQueryURL,
    //     method: "GET"
    // }).then(function (response) {
    //     console.log($(event.target).text())
    //     console.log(response)
       
    //     for (var i = 0; i < 4; i++) {
    //         $("#"+i).text(response.articles[i].title)
    //         console.log($("#img" + i))
    //         console.log(i);
    //         $("#img"+i).attr("src", response.articles[i].urlToImage);
    //         $("#img"+i).attr("href", response.articles[i].url);
    //         $("#content"+i).text(response.articles[i].description)
    //     }
    //     $(".image").click(function (event) {
    //         window.open($(event.target).attr("href"))
            
    //         })
        
    // })


    $.ajax({
        url: videosQueryURL,
        method: "GET"
    }).then(function (response) {
        console.log($(event.target).text())
        console.log(response)
       
        for (var i = 0; i < 4; i++) {
            $("#"+i).text(response.items[i].snippet.title)
            console.log($("#img" + i))
            console.log(i);
            $("#img"+i).attr("src", response.items[i].snippet.thumbnails.medium.url);
            // $("#img"+i).attr("href", response.articles[i].url);
            $("#content"+i).text(response.items[i].snippet.description)
        }
        // $(".image").click(function (event) {
        //     window.open($(event.target).attr("href"))
            
        //     })
        
    })
    






});
