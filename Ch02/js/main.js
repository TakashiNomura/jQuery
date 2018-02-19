$(function(){
    function ChangeColor(){
        $(this).css('color', '#ebc000');
    }

    $('#typo').on('mouseover', ChangeColor);
    $('#header').on('mouseout', ChangeColor);
});

