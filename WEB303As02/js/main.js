// WEB303 Assignment 2


$(document).ready(function() {
    function loadContent(url) {
        $.ajax({
            url: url,
            method: "GET",
            dataType: "html",
            success: function(data) {
                $("#content").hide().html(data);
                $("#content").fadeIn();
            },
            error: function() {
                console.error("Error loading content");
            }
        });
    }

    $("#prospect").click(function(event) {
        event.preventDefault();
        loadContent("prospect.html");
    });

    $("#convert").click(function(event) {
        event.preventDefault();
        loadContent("convert.html");
    });

    $("#retain").click(function(event) {
        event.preventDefault();
        loadContent("retain.html");
    });
});
