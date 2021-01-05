// x46hSJCLqaGAFDps6LRQpcLTBZRXAtdd

//example call
queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=x46hSJCLqaGAFDps6LRQpcLTBZRXAtdd"

$.ajax({
    url: queryURL,
    method: "GET"
})
  
    .then(function (response) {
        var results = response;
        console.log(results);
})