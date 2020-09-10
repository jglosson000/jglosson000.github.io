/*
    This has been copied from css-tricks.com
    https://css-tricks.com/the-simplest-ways-to-handle-html-includes/
*/

fetch("/top.html")
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.getElementById("top").innerHTML = data;
    });

fetch("/bottom.html")
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.getElementById("bottom").innerHTML = data;
    });

$('img').each(function() {
    var deg = $(this).data('rotate') || 0;
    var rotate = 'rotate(' + deg + 'deg)';
    $(this).css({ 
        '-webkit-transform': rotate,
        '-moz-transform': rotate,
        '-o-transform': rotate,
        '-ms-transform': rotate,
        'transform': rotate 
    });
});