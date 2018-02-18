$(function(){
    $('#typo').on('mouseover', function(){
        $('#typo').css('color', '#ebc000');
        $('header').css('color', '#ebc000');
    });
    $('#typo').on('mouseout', function(){
        $('#typo').css('color', '#ffffff');
        $('header').css('color', '#000000');
    });
});
