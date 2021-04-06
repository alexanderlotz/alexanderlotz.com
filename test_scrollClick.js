//https://stackoverflow.com/questions/1418838/html-making-a-link-lead-to-the-anchor-centered-in-the-middle-of-the-page

//<script>
$(document).ready(function(){
    $(".click").click(function(e){
        // prevent default action
        //alert("Click!");
        e.preventDefault();
        
        // get id of target div (placed in href attribute of anchor element)
        // and pass it to the scrollToElement function
        // also, use 2000 as an argument for the scroll speed (2 seconds, 2000 milliseconds)
        scrollToElement( $(this).attr('href'), 2000 );
    });
});
    
var scrollToElement = function(el, ms){
    var speed = (ms) ? ms : 600;
    $('html,body').animate({
        scrollTop: $(el).offset().top
    }, speed);
}
//</script>