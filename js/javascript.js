$(document).ready(function(){
    // click function which will exicute next link
    $('.next').on('click',function(){
        // selecting `ul` elements and there direct descendants `li`
        //  using the each method to interate over DOM
        $('ul > li').each(function (index, element, number) {
            // first if statement
            //  if `element` hasClass('on') is true then use
            // the `element` to access the `number` of the data-image attribute
            if ($('element').hasClass('on')){
                 number = $('element').data('image');
            }

            // second if statement
            // first condition
            // if number of arguments is greater than 0 is`true`
            // second condition
            // if `image_` + (number + 1) is `true`
            if ($('image_' + (number + 1)).length > 0){
                // next is assigned to number
                // add number by `1` each time we iterate
               next = number + 1;
            }
        });
    });
});
