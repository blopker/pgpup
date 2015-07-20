'use strict';

function encrypt () {
	var key = $('#pub-key').val();
	var publicKey = openpgp.key.readArmored(key);
	var msg = $('#message').val();
	openpgp.encryptMessage(publicKey.keys, msg).then(function(pgpMessage) {
	    $('#encrypted').html(pgpMessage);
	}).catch(function(error) {
	    $('#encrypted').html(error);
	});
}

$('.js-encrypt').click(encrypt);