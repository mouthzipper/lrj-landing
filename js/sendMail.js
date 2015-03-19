function sendMail() {
	var email = $( '#email' ).val();
    $.ajax({
      type: 'POST',
      url: 'https://mandrillapp.com/api/1.0/messages/send.json',
      data: {
        'key': 'BvAixL3dJL5LrGxmx8zGVQ',
        'message': {
          'from_email': email,
          'headers': {
          	'Reply-To': email
           },
           'subject': 'Website Contact Form Submission',
          'to': [
              {
                'email': 'lahirajuddotcom@gmail.com',
                'name': 'admin@lahirajud',
                'type': 'to'
              }
            ],
          'autotext': 'true',
          'subject': 'Subscribe!'
        }
      }
     }).done(function(response) {
            alert('Subscription sent.Thank you!'); // show success message
			$( '#email' ).val(''); // reset
     })
    .fail(function(response) {
		alert('Error in Subscription. Please try again');
    });
    return false;
}