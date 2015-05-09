function startTimer(elementId, startTime)
{
	$(elementId)
	.countdown(startTime, function(event) {
		$(this).text(
			event.strftime('%D天 %H:%M:%S')
			);
	});
}

function getTimer() {

	var countdown = getTimerObject();
	console.log(countdown);

	console.log($('#timer').text());
	$('#timer').text("value changed");

	// document.getElementById("timer").innerHTML = "Paragraph changed.";
	
	// var countdown = new Countdown({
	// 	selector: '#timer'
	// });

	// $('#timer').on('countdownStart', function() {
	// 	console.log('The countdown has been started.');
	// });

	// $('#timer').on('countdownEnd', function() {
	// 	console.log('The countdown has reached 0.');
	// });
}

