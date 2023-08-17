$(document).ready(function() {
    var apiKey = 'c48583f4f3msheb439dbccc4a86dp11f6fejsnf1375d627677';
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;

    $.ajax({
        async: true,
        crossDomain: true,
        url: 'https://moon-phase.p.rapidapi.com/advanced',
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'moon-phase.p.rapidapi.com'
        },
        success: function(data) {
            console.log(data);
            // Display moon phase data on the calendar
			var moonPhase = data.moon.phase_name;
			$('#moon-phase').text(moonPhase);
		
			// Display moon illumination
			var moonIllumination = data.moon.illumination;
			$('#moon-illumination').text(moonIllumination);
		
			// Display moon zodiac sign
			var moonZodiacSign = data.moon.zodiac_sign;
			$('#moon-zodiac-sign').text(moonZodiacSign);

			// Display timestamp
			var timestamp = new Date();
			$('#timestamp').text(timestamp.toLocaleString());
				
        },
        error: function(err) {
            console.log(err);
            alert('Error retrieving moon phase data');
        }
    });
});
