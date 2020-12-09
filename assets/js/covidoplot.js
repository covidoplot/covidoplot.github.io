
$(document).ready(function(){

    // construct navi template
    var nav = $('<nav />')
        .addClass('choice-switch btn-group')
        .attr('role', 'group')
        ;

    // construct button template
    var btn = $('<button/>').addClass('btn btn-primary');
    btn.click(function() {
        $(this).addClass('active').siblings().removeClass('active');
        var image = $(this).parent().parent().find('img');
        var src = image.attr('src');
        var n = src.search(/(\-\d+)?\.png$/i)
        var prefix = src.substring(0, n);
        var length = '';
        switch($(this).index()) {
            case 3:
                length = '7'
                break;
            case 2:
                length = '33'
                break;
            case 1:
                length = '100'
                break;
            case 0:
                length = '370'
                break;
        }
        var target = prefix + '-' + length + '.png';
        image.attr('src', target);
    })

    // apply templates
    nav = nav.insertBefore($('.choice img'));
    btn.appendTo(nav).text('1 Jahr');
    btn.appendTo(nav).text('1 Quartal');
    btn.appendTo(nav).text('1 Monat');
    btn.appendTo(nav).text('1 Woche');

});
