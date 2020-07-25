const responsive={
	0:
	{
		items:1
	},
	320:
	{
		items:1
	},
	520:
	{
		items:2
	},
	950:
	{
		items:3
	}
};


$(document).ready(function(){
//owl-carousel for blog
$(".owl-carousel").owlCarousel({
	loop:true,
	autoplay:false,
	autoplayTimeout:3000,
	dots:false,
	nav:true,
	navText:[$('.owl-navigation .owl-nav-prev'),$('.owl-navigation .owl-nav-next')],
	responsive:responsive
});


//click to scroll up
$('.move-up span').click(function(){
 $('html,body').animate({
 	scrollTop:0
 },1000)	
})

});