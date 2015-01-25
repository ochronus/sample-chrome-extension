$("a").each(function() {
    var $elem = $(this);
    var url = $elem.attr("href");

    if (url.indexOf("https://news.ycombinator.com") === 0 || url.indexOf("http") === -1) {
        return;
    }
    
    if ($elem.attr("target") === undefined) {
        $elem.attr("target", "_blank");
        console.log($elem.attr("href"), $elem.attr("target"));
    }
});