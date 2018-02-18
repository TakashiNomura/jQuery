$(function(){
    $('#typo')
        .on('mouseover', function(){
            $(this).stop(true).animate({
                backgroundColor: '#ae5e9b'
            }, 500);
    })
    .on('mouseout', function(){
        $(this).stop(true).animate({
            backgroundColor: '#3498db'
        }, 500);
    });
});

