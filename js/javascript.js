$(document).ready(function(){
    // click function which will exicute next link
    $('.next').on('click',function(){
        // selecting `ul` elements and there direct descendants `li`
        //  using the each method to interate over DOM
        $('ul > li').each(function (index, element, number) {
            //  if `element` hasClass('on') then use
            if ($('element').hasClass('on')) {
                // the number variable to access the `element` in the data-image attribute
                number = $('element').data('image');
            // first condition
            // if number of arguments is greater than 0 is`true`
            // second condition
            // if `image_` + (number + 1) is `true` then
            if ($('image_' + (number + 1).length > 0)){
                // next is assigned to number
                // add number by `1` each time we iterate
                next = number + 1;
            }
            // if false then next is 0
                else {
                    next = 0;
                }
            }
        // promise
        }).promise().done(function(){
            // removing `carousle > ul > li` from css
            $('.carousle > ul > li').removeClass('off').addClass('on');
            // moving to next image each time next is clicked
            $('li. image_' + next).removeClass('off').addClass('on');
        });
    });
});
