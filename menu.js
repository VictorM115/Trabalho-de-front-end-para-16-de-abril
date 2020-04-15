$(document).ready(function() {
    var botao = $('.bt-semijoias');
    var dropDown = $('.semijoias');
    botao.on('click', function(event) {
        dropDown.stop(true, true).slideToggle();
        event.stopPropagatiosn();
    });
});

$(document).ready(function() {
    var botao = $('.bt-artigos');
    var dropDown = $('.artigos');
    botao.on('click', function(event) {
        dropDown.stop(true, true).slideToggle();
        event.stopPropagatiosn();
    });
});