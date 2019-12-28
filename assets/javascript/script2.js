var topic = ""
// Make a variable out of the Switch
var contentSwitch = document.getElementById("newsSwitch")
// If the Switch is clicked and is set to news
$('#newsSwitch').click(function (event) {
    if (contentSwitch.value === "true") {
        // Change the switch to videos
        $('#newsSwitch').attr("value", "false")
        $('#switchLabel').text("Videos")
    }
    // Else if the switched is set to videos
    else if (contentSwitch.value === "false") {
        // Then set it back to news
        $('#newsSwitch').attr("value", "true")
        $('#switchLabel').text("News")
    }
})
// API Call function to get news results
function getNews() {
    // Set the news API URL using the topic the user clicked on
    var newsQueryURL = "https://newsapi.org/v2/everything?q=" + topic + "&apiKey=3922d1a6ae354cf0a0cf1117b7946621"
    $.ajax({
        url: newsQueryURL,
        method: "GET"
    }).then(function (response) {
        // Logs the topic and data response from the API call
        // console.log($(event.target).text())
        // console.log(response)
        // Loop to add results to their divs, loops 9 times
        for (var i = 1; i < 10; i++) {
            // Add the title to the div with the matching numbered ID
            $("#" + i).text(response.articles[i].title)
            console.log($("#img" + i))
            console.log(i);
            // Add the image to the <img> element with the matching numbered ID
            $("#img" + i).attr("src", response.articles[i].urlToImage);
            // Add the link to the article to the image 
            $("#img" + i).attr("href", response.articles[i].url);
            // Add the description of the article to the div with the matching numebered ID           
            $("#content" + i).text(response.articles[i].description)
        }
    })
}
// API Call function to get video results
function getVideos() {
    // Set the video API URL using the topic the user clicked on
    var videosQueryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + topic + "&type=video&maxResults=10&key=AIzaSyAXfNjKjSqLmk8Y7yfbis7sb8K3xzmiDw4"
    $.ajax({
        url: videosQueryURL,
        method: "GET"
    }).then(function (response) {
        // Logs the topic and the data response from the API call
        // console.log($(event.target).text())
        console.log(response)
        // Loop to add results to their divs, loops 9 times
        for (var i = 1; i < 10; i++) {
            // Add the title to the div with the matching numbered ID
            $("#" + i).text(response.items[i].snippet.title)
            console.log($("#img" + i))
            console.log(i);
            // Add the image to the <img> element with the matching numbered ID
            $("#img" + i).attr("src", response.items[i].snippet.thumbnails.medium.url);
            // Add the link to the video to the image 
            $("#img" + i).attr("href", "https://www.youtube.com/watch?v=" + response.items[i].id.videoId);
            // Add the description of the video to the div with the matching numebered ID
            $("#content" + i).text(response.items[i].snippet.description)
        }
    })
}
// When user clicks a button 
$('.buttonLink').click(function (event) {
    event.preventDefault();
    // Make a new variable called topic based on the text inside the button
    topic = $(event.target).text();
    // If the switch is toggled to news 
    if (contentSwitch.value === "false") {
        getVideos()
    }
    // Else if the switch is set to videos
    else {
        getNews()
    }
});
// If the user clicks on an image, open that image's URL
$(".image").click(function (event) {
    window.open($(event.target).attr("href"))
})
// If the user clicks a button on the homepage
$(".topicBtn").click(function (event) {
    // Save the topic of that button to session storage
    sessionStorage.setItem("topic", $(event.target).text())
    // Open the landing page
    window.open("landingpage.html", '_top');
})
// On page load
function pageLoad() {
    // Set the topic to the previously saved button topic
    topic = sessionStorage.getItem("topic")
    // Run the news function
    getNews();
}
// Run the pageload function
pageLoad()