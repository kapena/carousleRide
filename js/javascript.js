$(document).ready(function(){
    $('.next').on('click',function(){

        $('ul > li').each(function (index, element) {
            if ($(element).hasClass('on')) {

                var number = $(element).data('image');

            if ($('.image_' + (number + 1)).length > 0) {

                next = number + 1;
            }
                else {
                    next = 0;
                }
            }
        // promise
        }).promise().done(function(){
            // remove class of `on` add class of `off`
            $('.carousel > ul > li').removeClass('on').addClass('off');
            // moving to next image each time next is clicked
            $('li.image_' + next).removeClass('off').addClass('on');
        });
    });
    // event
    $('.prev').on('click',function(){
        // loop
        $('ul > li').each(function (index,element){
                // if element has a class of `on`
                if ($(element).hasClass('on')){
                    var number = $(element).data('image');
                // if number of arguments is less than 0 and
                // number - 1 is true then
                if ($('.image_' + (number - 1)).length > 0){
                    // prev is assigned to number and minused by 1
                   prev = number - 1;
                }
                   else{
                       next = 0;
                   }
            }

    }).promise().done(function(){
        // remove class `on` add class `off`
        $('.carousel > ul > li').removeClass('on').addClass('off');
        $('li.image_'+ prev).removeClass('off').addClass('on');
        });
    });
});
