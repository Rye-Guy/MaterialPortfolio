var didScroll;
var lastScroll;
var d = 5; 
var navbarHeight = $("#navControl").outerHeight();

$(window).scroll(function(event){
    didScroll = true; 
});

setInterval(function(){
    if(didScroll){
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled(){
    //number represents the current value of the scroll position / starts at 0
    var st = $(this).scrollTop();
    console.log(st);
    //Makes sure the scroll is more than d

    if(Math.abs(lastScroll - st) <= d)
    

    //what happens after you scroll past the navbar and were adding classes to control the bar. This is needed so we dont see emptpy space behind the navbar
    if(st > lastScroll && st > navbarHeight){
        //Scroll Down
        $("#navControl").removeClass('nav-down').addClass('nav-up');
    }else{
        //Scroll Up
        $("#navControl").removeClass('nav-up').addClass('nav-down');
    }
}