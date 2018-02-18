$(function(){
    $('#typo .inner')
        .on('mouseover', function(){
            $('#typo').animate({
                backgroundColor: '#ae5e9b'
            }, 500);
    })
    .on('mouseout', function(){
        $('#typo').animate({
            backgroundColor: '#3498db'
        }, 500);
    });
});

