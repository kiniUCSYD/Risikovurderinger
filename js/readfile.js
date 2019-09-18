// JavaScript source code
$(document).ready(function () {
    $.get('../../risikovurderingtekstfiler/risikovurdering_forsidetekst.txt', function (data) {
        var lines = data.split("\n");
        console.log("lines" + lines);

        $.each(lines, function (n, elem) {
            $('#myContainer').append('<div>' + elem + '</div>');
        });
    });
});