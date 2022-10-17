var testButton = document.getElementById("test-btn");

function getApi() {
    var requestUrl = "https://wger.de/api/v2/muscle/";

    fetch(requestUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
    })
}

testButton.addEventListener("click", getApi);