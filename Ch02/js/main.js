$(function(){
    $('#typo .inner')
        .on('click', function(){
            $('#typo .inner').animate({
                opacity: 0,
                fontSize: '0px'    
            },
            1500
            );
        });
});

