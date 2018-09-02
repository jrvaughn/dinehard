$(document).ready(function(){


var setCurrentPage = function(url) {
  $('.content').load(url);
};

$('.nav-link').on('click', function(e){
    e.preventDefault();
    var targetUrl = $(this).attr('href'),
        targetTitle = $(this).attr('title');

    $(".nav-link a[href='" + window.location.pathname + "']").fadeTo(500, 1.0);

    window.history.pushState({url: "" + targetUrl + ""}, targetTitle, targetUrl);
    setCurrentPage(targetUrl);
});

window.onpopstate = function(e) {
    $(".nav-link").fadeTo('fast', 1.0);
    setCurrentPage(e.state ? e.state.url : null);
};
});
