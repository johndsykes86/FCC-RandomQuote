
$(document).ready(function() {

    var quote = "";
    var author = "";


    $('.new').on("click", function() {

    $.getJSON('https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?', function(data){
        quote = data.quoteText;
        author = data.quoteAuthor;

        if (author === ""){author = "Unknown Author"}

        $('.display').empty();
        $('.display').append('<p class=quote>' + "''" + quote + "''" + '</p>' + '<br>' + '<p class=author>'  + author  + '<p>');
    });


    });

    $('.tweet').on("click", function() {
        if (quote.length + author.length >= 150) {
            alert('There are too many characters for this fine quote to be tweeted. Try another one!')
        } else {
            window.open("https://twitter.com/intent/tweet?text=" + "\"" + quote + "\"" + " - " + author);
            return false;
        }


    });




});
