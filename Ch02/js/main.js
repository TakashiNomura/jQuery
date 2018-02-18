$(function(){
    $('#typo')
        .on('mouseover', function(){
            $('#typo').css({
                color: '#ebc000',
                bacgroundColor: '#ae5e9b'    
            });
        })
        .on('mouseout', function(){
            $('#typo').css({
                color: '',
                bacgroundColor: ''
            });
        });
});

