// JavaScript source code
$(document).ready(function () {
    console.log('in document ready');
    $.get('../Risikovurderinger/risikovuderinger_forside.txt', function (data) {
        var lines = data.split("\n");

        console.log('in get');
        console.log('lines: ' + lines);

        $.each(lines, function (n, elem) {
            $('#myContainer').append('<div>' + elem + '</div>');
        });
    });
});