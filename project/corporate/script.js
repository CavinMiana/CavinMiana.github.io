var x = 0;

$('#firstnext').click(function(event) {
	if(x == 0) {
		$('.firstcontainer').addClass('upaway');
		$('.secondcontainer').addClass('comeup');
		x = 1;
	} else if(x == 1) {
		$('.secondcontainer').addClass('upupaway');
		$('.thirdcontainer').addClass('comecomeup');
		x = 2;
	}
});