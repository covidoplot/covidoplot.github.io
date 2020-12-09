
$(document).ready(function(){

    // construct navi template
    var nav = $('<nav />')
        .addClass('choice-switch btn-group')
        .attr('role', 'group')
        ;

    // construct button template
    var btn = $('<button/>').addClass('btn btn-primary');

    // apply templates
    nav = nav.insertBefore($('.choice img'));
    btn.clone().appendTo(nav).text('1 Jahr');
    btn.clone().appendTo(nav).text('1 Quartal');
    btn.clone().appendTo(nav).text('1 Monat');
    btn.clone().appendTo(nav).text('1 Woche');

    // apply dynamics
    // catch again as function is lost while cloning
    $('.choice .btn').click(function() {
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
    });

    $('.choice .btn-group :first-child').click();

});
