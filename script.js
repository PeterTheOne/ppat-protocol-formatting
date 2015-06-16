$(function() {
    $('input').on('click', function(event) {
        event.preventDefault();

        var text = $('textarea').val();
        var textLines = text.split('\n');
        var result = '';
        $.each(textLines, function(key){
            result += textLines[key].replace(/^([a-zA-Z0-9äöüÄÖÜ]+): /, ":'''$1:''' ") + '\n';
        });
        $('textarea').val(result);
    });
});
