$(document).ready(function() {
	setDates();
	updateTime();
	setTimeout("startAnimation()", 300);
	bindClickEvents()
});

function bindClickEvents() {
	$(document).click(function(e) {
		$('#appmenu').animate({
			opacity: 0,
			bottom: "50px"
		}, 300);

		$('#appmenu').css("pointer-events", "none");

		$('#calendar').animate({
			opacity: 0,
			bottom: "50px"
		}, 300);

		$('#calendar').css("pointer-events", "none");

		$('#settingslide').animate({
			right: "-300px"
		}, 300, 'easeInOutCubic');
	});

	$('#menuicon').click(function(e) {
		$("#appmenu").animate({
			opacity: 1,
			bottom: "60px"
		}, 300);
		$('#appmenu').css("pointer-events", "visible");
		e.stopPropagation();
	});

	$('#timeplugin').click(function(e) {
		$('#calendar').animate({
			opacity: 1,
			bottom: "60px",
			left: $('#timeplugin').position().left - ($('#calendar').width() / 2) + "px"
		}, 300);
		$('#calendar').css("pointer-events", "visible");
		e.stopPropagation();
	});

	$('#settingsbar').click(function(e) {
		$('#settingslide').animate({
			right: "0px"
		}, 300);
		e.stopPropagation();
	})

	$('#calendar').css({
		left: $('#timeplugin').position().left - ($('#calendar').width() / 2) + "px"
	});

	$('#appmenu').click(function(e) {
		e.stopPropagation();
	});

	$('#calendar').click(function(e) {
		e.stopPropagation();
	});

	$('#settingslide').click(function(e) {
		e.stopPropagation();
	});
}

function setDates() {
	var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	var d = new Date();

	$('#calendarheaderinfo h3').html(months[d.getMonth()]);
	$('#calendarheaderinfo h2').html(d.getDate());
	$('#calendarheaderinfo h4').html(d.getFullYear());

	$('#calendarcontent').datepicker({
		inline: true,
		showOtherMonths: true,
		dayNamesMin: ['S', 'M', 'T', 'W', 'T', 'F', 'S']
	});

	$('.ui-datepicker-prev').remove();
	$('.ui-datepicker-next').remove();

	$('.ui-datepicker-header').wrap("<center></center>");
	$('.ui-datepicker-calendar').wrap("<center class='ui-datepicker-calendar-center'></center>");

	$('.ui-datepicker-current-day').css("padding-right", "calc(4% - 5px)");
	$('.ui-datepicker-current-day').css("padding-left", "calc(4% - 5px)");
}

function updateTime() {
	var t = new Date();
	var h = t.getHours();
	var m = t.getMinutes();

	var timeval = "" + ((h > 12) ? h - 12 : h)
	timeval += ((m < 10) ? ":0" : ":") + m
	timeval += (h >= 12) ? " PM" : " AM"
	document.getElementById('timeplugin').innerHTML = timeval;

	setTimeout("updateTime()", 60000);
}

function startAnimation() {
	$('body').animate({
		top: 0
	}, 500);
}