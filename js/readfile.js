// JavaScript source code
$(document).ready(function () {
    $.get('../../risikovurderingtekstfiler/risikovurdering_forsidetekst.txt', function (data) {
        var lines = data.split("\n");
        $.each(lines, function (n, elem) {
            $('#myContainer').append('<p>' + elem + '</p>');
        });
    });
});